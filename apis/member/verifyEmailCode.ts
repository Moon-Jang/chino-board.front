import { AxiosResponse } from "axios"
import API from "../setting"

interface payload {
    mail: string
    urlCode: string
    code: string
}
const API_verifyEmailCode = async (
    payload: payload
): Promise<AxiosResponse> => {
    let response
    try {
        response = await API.post("/members/checkmail", payload)
    } catch (e) {
        response = e.response
    } finally {
        return response as AxiosResponse
    }
}

export default API_verifyEmailCode
