import { AxiosResponse } from "axios"
import API from "../setting"

type payload = {
    title: string
    contents: string
    AUTH_TOKEN: string
}
const API_createDocument = async (payload: payload): Promise<AxiosResponse> => {
    let response
    const { title, contents } = payload
    try {
        response = await API.post(`/board/documents`, {
            data: {
                title,
                contents,
            },
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

export default API_createDocument
