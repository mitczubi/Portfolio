import { createClient } from "@sanity/client";

export default createClient({
    projectId: '5vunoj7p',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true
})