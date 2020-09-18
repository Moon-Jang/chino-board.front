import { AxiosResponse } from "axios"
import API from "../setting"

interface payload {
    phone: string
    code: string
}
const API_verifySMSCode = async (payload: payload): Promise<AxiosResponse> => {
    let response
    try {
        response = await API.post("/members/checksms", payload)
    } catch (e) {
        response = e.response
    } finally {
        return response as AxiosResponse
    }
}

export default API_verifySMSCode
