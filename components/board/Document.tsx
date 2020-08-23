const Document = (props): JSX.Element => {
    return (
        <div className="documentWrap">
            <div className="documentTitle">
                <div className="number">제목</div>
                <div className="title">{props.title}</div>
            </div>
            <div className="documentContents">{props.contents}</div>
            <div className="buttonWrap">
                <button className="clickable">이전</button>
                <button className="clickable">수정</button>
                <button className="clickable">삭제</button>
            </div>
        </div>
    )
}
export default Document
