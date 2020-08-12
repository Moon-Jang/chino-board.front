import { AxiosResponse } from "axios"
import API from "../setting"

interface payload {
    to: string
}
const API_sendSMSCode = async (payload: payload): Promise<AxiosResponse> => {
    let response
    try {
        response = await API.post("/members/sms", payload)
    } catch (e) {
        response = e.response
    } finally {
        return response as AxiosResponse
    }
}

export default API_sendSMSCode
