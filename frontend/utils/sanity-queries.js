import groq from "groq";
import client from "./sanity-client";

export async function getBlogPosts() {
    const query = groq`
        *[_type == "post" && publishedAt < now()] | 
        order(publishedAt desc)`

    const posts = await client.fetch(query);

    return posts
}