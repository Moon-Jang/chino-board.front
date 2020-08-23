import { AxiosResponse } from "axios"
import API from "../setting"

type payload = {
    listCnt: number
    curPage: number
}
const API_readBoard = async (payload: payload): Promise<AxiosResponse> => {
    let response
    const { curPage, listCnt } = payload
    try {
        response = await API.get(
            `/board/documents?page=${curPage}&pageCnt=${listCnt}`
        )
    } catch (e) {
        response = e.response
    } finally {
        return response as AxiosResponse
    }
}

export default API_readBoard
