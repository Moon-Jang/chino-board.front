import { createContext, Dispatch, SetStateAction } from "react"

const BoardContext = createContext({
    listCnt: 10,
    curPage: 1,
    contents: [],
    setStore: (() => {}) as Dispatch<
        SetStateAction<{
            listCnt: number
            curPage: number
            contents: never[]
        }>
    >,
})

export default BoardContext
