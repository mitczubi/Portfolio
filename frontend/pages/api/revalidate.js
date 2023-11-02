import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(req, res) {
    const signature = req.headers[SIGNATURE_HEADER_NAME];
    const isValid = isValidSignature(JSON.stringify(req.body), signature, SANITY_WEBHOOK_SECRET);

    console.log(`===== Is the webhook valid? ${isValid}`);

    if (!isValid) {
        res.status(401).json({ success: false, message: 'Invalid Signature'})
        return;
    }

    try {
        const pathToRevalidate = "/post/" + req.body.slug.current;
    
        console.log(`===== Revalidation: ${pathToRevalidate}`);
    
        await res.revalidate("/post/")
        await res.revalidate(pathToRevalidate);
    } catch (err) {
        return res.status(500).send('Error while revalidating.')
    }

}