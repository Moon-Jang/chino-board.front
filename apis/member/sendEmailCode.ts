import { AxiosResponse } from "axios"
import API from "../setting"

interface payload {
    to: string
}
const API_sendEmailCode = async (payload: payload): Promise<AxiosResponse> => {
    let response
    try {
        response = await API.post("/members/email", payload)
    } catch (e) {
        response = e.response
    } finally {
        return response as AxiosResponse
    }
}

export default API_sendEmailCode
