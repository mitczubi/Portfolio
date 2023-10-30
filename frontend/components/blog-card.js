import { Card } from 'react-bootstrap';

export default function BlogCard ({ title, slug }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>Blah blah</Card.Subtitle>
                <Card.Text>
                    doo daa
                </Card.Text>
                <Card.Link href={`/post/${encodeURIComponent(slug.current)}`}>Read</Card.Link>
            </Card.Body>
        </Card>
    )
}