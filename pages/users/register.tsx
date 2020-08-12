import { useState, SyntheticEvent } from "react"
import Layout from "../../components/Layout"
import InputWrap from "./../../components/InputWrap"
import Router from "next/router"
import {
    API_verifySMSCode,
    API_register,
    API_sendEmailCode,
    API_sendSMSCode,
} from "../../apis/member"

const initialState = {
    email: "",
    name: "",
    pw: "",
    pwCheck: "",
    phone: "",
    phoneCheck: "",
    token: "",
}
const Register = (): JSX.Element => {
    const [inputs, setInputs] = useState(initialState)
    const { email, name, pw, pwCheck, phone, phoneCheck } = inputs

    const handleChange = (e: SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement
        setInputs({ ...inputs, [name]: value })
    }
    const register = async (e: SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as HTMLInputElement
        target.disabled = true
        let response
        response = await API_verifySMSCode({ phone: phone, code: phoneCheck })
        if (response.status !== 200) {
            alert(response.data.error)
            target.disabled = false
            return
        }
        const token = response.data.result
        const payload = {
            email,
            name,
            pw,
            phone,
            token,
        }
        response = await API_register(payload)
        if (response.status !== 200) {
            alert(response.data.error)
            target.disabled = false
            return
        }
        response = await API_sendEmailCode({ to: email })
        if (response.status !== 200) {
            alert(response.data.error)
            target.disabled = false
            return
        }
        Router.push("/test")
    }

    const sendSMSCode = async (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement
        const response = await API_sendSMSCode({ to: phone })
        if (response.status !== 200) {
            alert(response.data)
            return
        }
        target.disabled = true
        target.classList.remove("clickable")
    }

    const confirmPw = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement
        const pwElement = e.nativeEvent.composedPath()[3][2]
        const { name, value } = target
        if (pw === value) {
            target.classList.add("sucess")
            pwElement.classList.add("sucess")
            target.classList.remove("error")
            pwElement.classList.remove("error")
        } else {
            target.classList.add("error")
            pwElement.classList.add("error")
            target.classList.remove("sucess")
            pwElement.classList.remove("sucess")
        }
        console.log(pw, value)
        setInputs({ ...inputs, [name]: value })
    }
    return (
        <Layout title="Test | Next.js + TypeScript Example">
            <div className="formWrap">
                <h1>RegisterPage</h1>
                <form onSubmit={register}>
                    <InputWrap
                        name="email"
                        type="text"
                        placeholder="Input your email"
                        handleChange={handleChange}
                        value={email}
                    />
                    <InputWrap
                        name="name"
                        type="text"
                        placeholder="Input your name"
                        handleChange={handleChange}
                        value={name}
                    />
                    <InputWrap
                        name="pw"
                        type="password"
                        placeholder="Input your password"
                        handleChange={handleChange}
                        value={pw}
                    />
                    <InputWrap
                        name="pwCheck"
                        type="password"
                        placeholder="Input your password once again"
                        handleChange={confirmPw}
                        value={pwCheck}
                    />
                    <InputWrap
                        name="phone"
                        type="text"
                        placeholder="Input phoneNum"
                        handleChange={handleChange}
                        value={phone}
                        button={true}
                        buttonValue={"코드 발송"}
                        buttonOnClick={sendSMSCode}
                    />
                    <InputWrap
                        name="phoneCheck"
                        type="text"
                        placeholder="Input your CheckCode"
                        handleChange={handleChange}
                        value={phoneCheck}
                    />
                    <button type="submit">register</button>
                </form>
            </div>
        </Layout>
    )
}

export default Register
