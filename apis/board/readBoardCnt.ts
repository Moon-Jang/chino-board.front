import { AxiosResponse } from "axios"
import API from "../setting"

type payload = {
    AUTH_TOKEN: string
}
const API_readBoardCnt = async (payload: payload): Promise<AxiosResponse> => {
    let response
    try {
        response = await API.get("/board/documents/cnt", {
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

export default API_readBoardCnt
