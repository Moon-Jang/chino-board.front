import BoardContext from "./BoardContext"
import { useContext } from "react"
import Router from "next/router"

const BoardUtils = (): JSX.Element => {
    const { totalCnt, listCnt, curPage, contents, setStore } = useContext(
        BoardContext
    )
    const handleChange = (e) => {
        const target = e.target
        setStore({ totalCnt, listCnt: target.value, curPage, contents })
    }
    return (
        <div className="boardUtils">
            <div className="listCntWrap">
                <select defaultValue={listCnt} onChange={handleChange}>
                    <option value="5">5개</option>
                    <option value="10">10개</option>
                    <option value="15">15개</option>
                    <option value="30">30개</option>
                </select>
            </div>
            <div className="writeButtonWrap">
                <button
                    className="writeBtn clickable"
                    onClick={() => Router.push("board/write")}>
                    글쓰기
                </button>
            </div>
        </div>
    )
}

export default BoardUtils
