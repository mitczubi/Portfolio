import "../styles/main.css"
import "bootstrap/dist/css/bootstrap.css";

import Layout from "../components/layout";


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
