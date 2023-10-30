import groq from "groq";
import client from "../../client";

import { Container, Row, Col, Card } from "react-bootstrap";
import BlogCard from "../../components/blog-card";
import styles from "../../styles/blog/BlogIndex.module.css";

export default function Post ({ posts }) {

    return (
        <>
            <Container fluid="md" className={`p-3 ${styles.customContainer}`}>
                <Row>
                    {posts.map((blogPost, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className={`py-3`}>        
                            <BlogCard {...blogPost}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
        *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
        props: {
            posts
        }
    }
}