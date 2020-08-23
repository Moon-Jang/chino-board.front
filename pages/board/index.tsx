import BoardLayout from "../../components/BoardLayout"
import Board from "../../components/board/Board"
import BoardUtils from "../../components/board/BoardUtils"
import BoardContext from "../../components/board/BoardContext"
import { useState, useEffect } from "react"
import { API_readBoard } from "../../apis/board"

const BoardPage = () => {
    const [store, setStore] = useState({
        listCnt: 10,
        curPage: 1,
        contents: [],
    })
    const { listCnt, curPage, contents } = store
    useEffect(() => {
        fetchContents()
    }, [listCnt, curPage])

    const fetchContents = async () => {
        const response = await API_readBoard({ curPage, listCnt })
        if (response.status !== 200) {
            console.log(response.data)
            return
        }
        setStore({ ...store, contents: response.data })
    }

    console.log(contents)
    return (
        <BoardLayout>
            <header>
                <div className="titleWrap">
                    <h2>게시판 페이지</h2>
                    <p>치노보드 입니다.</p>
                </div>
            </header>
            <main className="boardPage">
                <div className="mainWrap">
                    <BoardContext.Provider
                        value={{ listCnt, curPage, contents, setStore }}>
                        <BoardUtils />
                        <Board />
                    </BoardContext.Provider>
                </div>
            </main>
        </BoardLayout>
    )
}

export default BoardPage
