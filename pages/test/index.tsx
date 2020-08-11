import Link from 'next/link'
import LoginLayout from '../../components/LoginLayout'

const TestPage = () => (
  <LoginLayout title="Test | Next.js + TypeScript Example">
    <h1>Test</h1>
    <p>This is the Test page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </LoginLayout>
)

export default TestPage
