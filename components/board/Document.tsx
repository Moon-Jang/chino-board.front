import Router from "next/router"
import { API_deleteDocument } from "../../apis/board"

const Document = (props): JSX.Element => {
    const handleDelete = async () => {
        const response = await API_deleteDocument({
            hash: props.hash,
            AUTH_TOKEN: localStorage.jwt,
        })
        if (response.status !== 200 || !response.status) {
            alert(response.data.error)
            console.log(response)
            return
        }
        Router.push("/board")
    }

    return (
        <div className="documentWrap">
            <div className="documentTitle">
                <div className="number">제목</div>
                <div className="title">{props.title}</div>
            </div>
            <div className="documentContents">{props.contents}</div>
            <div className="buttonWrap">
                <button
                    className="clickable"
                    onClick={() => Router.push("/board")}>
                    이전
                </button>
                <button
                    className="clickable"
                    onClick={() =>
                        Router.push(`/board/modify?hash=${props.hash}`)
                    }>
                    수정
                </button>
                <button className="clickable" onClick={handleDelete}>
                    삭제
                </button>
            </div>
        </div>
    )
}
export default Document
