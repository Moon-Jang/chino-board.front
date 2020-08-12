import Link from "next/link"
import Layout from "../components/Layout"

const IndexPage = () => (
    <Layout title="Login">
        <h1>CHINO-BOARD 👋</h1>
        <p>
            <Link href="/test">
                <a>Test</a>
            </Link>
        </p>
    </Layout>
)

export default IndexPage
