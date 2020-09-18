import { AxiosResponse } from "axios"
import API from "../setting"

type payload = {
    hash: string
    AUTH_TOKEN: string
}
const API_readDocument = async (payload: payload): Promise<AxiosResponse> => {
    let response
    try {
        response = await API.get(`/board/documents/${payload.hash}`, {
            headers: {
                Authorization: "bearer " + payload.AUTH_TOKEN,
            },
        })
    } catch (e) {
        response = e.response
    } finally {
        return response as AxiosResponse
    }
}

export default API_readDocument
