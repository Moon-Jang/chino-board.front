import { useContext } from "react"
import BoardContext from "./BoardContext"
import Router from "next/router"

const Board = (): JSX.Element => {
    return (
        <div className="boardWrap">
            <BoardHeader />
            <BoardContents />
            <BoardFooter />
        </div>
    )
}
const BoardHeader = (): JSX.Element => {
    return (
        <div className="boardHeader">
            <div className="number">번호</div>
            <div className="title">제목</div>
            <div className="writer">글쓴이</div>
            <div className="modifyDate">날짜</div>
        </div>
    )
}

interface content {
    idx: number
    hash: string
    title: string
    writer: string
    mod_date: string
}
const BoardContents = (): JSX.Element => {
    const { contents, curPage, listCnt } = useContext(BoardContext)
    const renderContents = (): JSX.Element[] => {
        return contents.map((content: content, idx: number) => (
            <Content
                key={content.idx}
                hash={content.hash}
                number={(curPage - 1) * listCnt + idx + 1}
                title={content.title}
                writer={content.writer}
                modifyDate={content.mod_date}
            />
        ))
    }
    return <div className="boardContents">{renderContents()}</div>
}

interface contentProps {
    number: number
    hash: string
    title: string
    writer: string
    modifyDate: string
}
const Content = (props: contentProps): JSX.Element => {
    const movePage = (e) => {
        e.stopPropagation()
        Router.push("board/document?hash=" + props.hash)
    }
    return (
        <div className="row" onClick={movePage}>
            <div className="number">{props.number}</div>
            <div className="title">{props.title}</div>
            <div className="writer">{props.writer}</div>
            <div className="modifyDate">{props.modifyDate}</div>
        </div>
    )
}

const BoardFooter = (): JSX.Element => {
    const { totalCnt, listCnt, curPage, contents, setStore } = useContext(
        BoardContext
    )
    const totalPage = Math.trunc(totalCnt / listCnt)

    const movePage = (e) => {
        const target = e.target
        const page = target.getAttribute("data-idx")
        setStore({ listCnt, totalCnt, curPage: page * 1, contents })
    }
    const moveFirstPage = () => {
        setStore({ listCnt, totalCnt, curPage: 1, contents })
    }
    const moveEndPage = () => {
        const endPage =
            (totalCnt / listCnt) % 10 === 0 ? totalPage : totalPage + 1
        setStore({ listCnt, totalCnt, curPage: endPage, contents })
    }
    const moveBefore = () => {
        if (curPage - 1 < 1) return
        setStore({ listCnt, totalCnt, curPage: curPage - 1, contents })
    }
    const moveNext = () => {
        if (curPage + 1 > totalPage) return
        setStore({ listCnt, totalCnt, curPage: curPage + 1, contents })
    }
    const paging = () => {
        const liElements: JSX.Element[] = []

        let LiCnt =
            curPage % 10 != 0
                ? Math.trunc(curPage / 10) * 10
                : (Math.trunc(curPage / 10) - 1) * 10
        for (let i = 0; i < 10; i++) {
            if (LiCnt > totalPage) break
            liElements.push(
                <li
                    className="clickable"
                    key={LiCnt}
                    data-idx={LiCnt + 1}
                    onClick={movePage}>
                    {LiCnt++ + 1}
                </li>
            )
        }
        return liElements
    }
    return (
        <div className="boardFooter">
            <div className="boardNavgation">
                <button className="clickable" onClick={moveFirstPage}>
                    처음
                </button>
                <button className="clickable" onClick={moveBefore}>
                    이전
                </button>
                <ul>{paging()}</ul>
                <button className="clickable" onClick={moveNext}>
                    다음
                </button>
                <button className="clickable" onClick={moveEndPage}>
                    마지막
                </button>
            </div>
        </div>
    )
}

export default Board
