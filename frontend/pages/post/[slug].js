import { useRouter } from 'next/router'
import Navigation from "../../components/navbar";

const Post = () => {
  const router = useRouter()
  
  return (
    <>
    <Navigation />
    <article>
      <h1>{router.query.slug}</h1>
    </article>
    </>
  )
}

export default Post