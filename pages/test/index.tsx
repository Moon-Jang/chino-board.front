//import Link from "next/link"
import Layout from "../../components/Layout"
import { useState, SyntheticEvent } from "react"
import API_login from "./../../apis/auth/login"
import InputWrap from "./../../components/InputWrap"
import Link from "next/link"
import Router from "next/router"

const initialState = {
    email: "",
    pw: "",
}
const TestPage = () => {
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
        console.log(response)
        console.log(inputs)
        console.log("login")
        Router.push("/users/register")
    }

    return (
        <Layout title="Test | Next.js + TypeScript Example">
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

export default TestPage
