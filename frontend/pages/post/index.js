import { getBlogPosts } from "../../utils/sanity-queries";

import BlogList from "../../components/blog-list";

export default function Post ({ posts }) {
    return (
        <>
            <BlogList posts={posts}/>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getBlogPosts();
    return {
        props: {
            posts
        },
        revalidate: 10,
    }
}