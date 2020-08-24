import Layout from "../components/Layout"
import { useState, SyntheticEvent } from "react"
import API_login from "../apis/auth/login"
import InputWrap from "../components/InputWrap"
import Link from "next/link"
import Router from "next/router"
import { getCookie } from "../utils/utils"

const initialState = {
    email: "",
    pw: "",
}
const LoginPage = () => {
    const [inputs, setInputs] = useState(initialState)
    const { email, pw } = inputs
    const handleChange = (e: SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement
        setInputs({ ...inputs, [name]: value })
    }
    const login = async (e: SyntheticEvent) => {
        e.preventDefault()
        const response = await API_login({ ...inputs })
        if (response.status !== 200) {
            alert(response.data)
        }
        localStorage.jwt = response.data
        document.cookie = `jwt=${response.data}`
        Router.push("/board")
    }

    return (
        <Layout title="Login - chinoBoard">
            <div className="formWrap">
                <h1>LoginPage</h1>
                <form onSubmit={login}>
                    <InputWrap
                        name="email"
                        type="text"
                        placeholder="input email"
                        handleChange={handleChange}
                        value={email}
                    />
                    <InputWrap
                        name="pw"
                        type="password"
                        placeholder="input password"
                        handleChange={handleChange}
                        value={pw}
                    />
                    <div className="linkWrap">
                        <Link href="/users/register">
                            <a>register</a>
                        </Link>
                        <Link href="/#">
                            <a>find password</a>
                        </Link>
                    </div>
                    <button type="submit" className="clickable">
                        login
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const jwt = getCookie(context.req.headers.cookie, "jwt")
    let returnValue = jwt ? true : false
    return {
        props: {
            isLogin: returnValue,
        },
    }
}
export default LoginPage
