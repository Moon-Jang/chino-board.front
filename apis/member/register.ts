import { AxiosResponse } from "axios"
import API from "../setting"

interface payload {
    email: string
    name: string
    pw: string
    phone: string
    token: string
}
const API_register = async (payload: payload): Promise<AxiosResponse> => {
    let response
    try {
        response = await API.post("/members/register", payload)
    } catch (e) {
        response = e.response
    } finally {
        return response as AxiosResponse
    }
}

export default API_register
