import { API_verifyEmailCode } from "../../apis/member"
import Layout from "../../components/Layout"
import InputWrap from "../../components/InputWrap"
import { useState, SyntheticEvent } from "react"
import { useRouter } from "next/router"
const confirm = (): JSX.Element => {
    const [code, setCode] = useState("")
    const router = useRouter()
    const { urlcode, mail } = router.query
    console.log(urlcode, mail)
    const handleChange = (e: SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement
        setCode(value)
    }
    const confirm = async (e: SyntheticEvent) => {
        e.preventDefault()
        const payload = {
            mail: mail as string,
            urlCode: urlcode as string,
            code: code,
        }
        const response = await API_verifyEmailCode(payload)
        if (response.status !== 200) {
            alert(response.data.error)
            return
        }
        console.log(response)
        router.push("/test")
    }
    return (
        <Layout title="Test | Next.js + TypeScript Example">
            <div className="formWrap">
                <h1>ConfirmPage</h1>
                <form onSubmit={confirm}>
                    <InputWrap
                        name="code"
                        type="text"
                        placeholder="Input the certification code"
                        handleChange={handleChange}
                        value={code}
                    />
                    <button type="submit">confirm</button>
                </form>
            </div>
        </Layout>
    )
}

export default confirm
