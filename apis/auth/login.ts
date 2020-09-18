import { AxiosResponse } from "axios"
import API from "./../setting"

interface payload {
    email: string
    pw: string
}
const API_login = async (payload: payload): Promise<AxiosResponse> => {
    let response
    try {
        response = await API.post("/member/login", payload)
    } catch (e) {
        response = e.response
    } finally {
        return response as AxiosResponse
    }
}

export default API_login
