import { AxiosResponse } from "axios"
import API from "../setting"

type payload = {
    hash: string
    title: string
    contents: string
    AUTH_TOKEN: string
}
const API_updateDocument = async (payload: payload): Promise<AxiosResponse> => {
    let response
    const { title, contents, hash } = payload
    try {
        response = await API.put(
            `/board/documents/${hash}`,
            {
                title,
                contents,
            },
            {
                headers: {
                    Authorization: "bearer " + payload.AUTH_TOKEN,
                },
            }
        )
    } catch (e) {
        response = e.response
    } finally {
        return response as AxiosResponse
    }
}

export default API_updateDocument
