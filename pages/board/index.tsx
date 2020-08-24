import BoardLayout from "../../components/BoardLayout"
import Board from "../../components/board/Board"
import BoardUtils from "../../components/board/BoardUtils"
import BoardContext from "../../components/board/BoardContext"
import { useState, useEffect } from "react"
import { API_readBoard, API_readBoardCnt } from "../../apis/board"
import { getCookie } from "../../utils/utils"
//const jwt = localStorage.jwt
const BoardPage = (props) => {
    const error = props.error
    const [store, setStore] = useState({
        listCnt: 10,
        curPage: 1,
        contents: props.contents,
        totalCnt: props.totalCnt,
    })
    const { listCnt, curPage, contents, totalCnt } = store
    useEffect(() => {
        fetchContents(listCnt, curPage)
    }, [listCnt, curPage])
    const fetchContents = async (listCnt, curPage) => {
        const response = await API_readBoard({
            curPage,
            listCnt,
            AUTH_TOKEN: localStorage.jwt,
        })
        if (response.status !== 200) {
            console.log(response.data)
            return
        }
        setStore({ ...store, contents: response.data.result })
    }

    //console.log(contents)
    return (
        <BoardLayout title="board - chinoBoard">
            <header>
                <div className="titleWrap">
                    <h2>게시판 페이지</h2>
                    <p>치노보드 입니다.</p>
                </div>
            </header>
            <main className="boardPage">
                <div className="mainWrap">
                    <BoardContext.Provider
                        value={{
                            listCnt,
                            totalCnt,
                            curPage,
                            contents,
                            setStore,
                        }}>
                        <BoardUtils />
                        <Board />
                    </BoardContext.Provider>
                    {error && console.log}
                </div>
            </main>
        </BoardLayout>
    )
}
export async function getServerSideProps(context) {
    const jwt = getCookie(context.req.headers.cookie, "jwt")
    const AUTH_TOKEN = jwt
    const response = await API_readBoard({
        curPage: 1,
        listCnt: 10,
        AUTH_TOKEN,
    })
    const response2 = await API_readBoardCnt({ AUTH_TOKEN })
    if (response.status !== 200 || !response.status) {
        return {
            props: {
                error: response.data.error,
                contents: [],
            },
        }
    }

    return {
        props: {
            contents: response.data.result,
            totalCnt: response2.data.result,
        },
    }
}
/* export const getStaticProps = async () => {
    const AUTH_TOKEN =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYnk4NTAyQG5hdmVyLmNvbSIsImlkeCI6NiwiYXV0aCI6MSwiaWF0IjoxNTk4MTY4NDE0LCJleHAiOjE1OTgyMTE2MTR9.wggAXyKVO_bXa7cEaBTAKKRzM9HWpm2i7x1StTOVoU4"

    const response = await API_readBoard({
        curPage: 1,
        listCnt: 10,
        AUTH_TOKEN,
    })
    const response2 = await API_readBoardCnt({ AUTH_TOKEN })
    if (response.status !== 200 || !response.status) {
        return {
            props: {
                error: response.data.error,
                contents: [],
            },
        }
    }

    return {
        props: {
            contents: response.data.result,
            totalCnt: response2.data.result,
        },
    }
} */

export default BoardPage
