import Link from 'next/link'
import LoginLayout from '../components/LoginLayout'

const IndexPage = () => (
  <LoginLayout title="Login">
    <h1>CHINO-BOARD 👋</h1>
    <p>
      <Link href="/test">
        <a>Test</a>
      </Link>
    </p>
    
  </LoginLayout>
)

export default IndexPage
