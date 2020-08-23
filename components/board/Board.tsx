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
const BoardContents = (): JSX.Element => {
    return (
        <div className="boardContents">
            <Content
                number="1"
                title="안녕하세요"
                writer="호우"
                modifyDate="2020.05.03"
            />
        </div>
    )
}

interface contentProps {
    number: string
    title: string
    writer: string
    modifyDate: string
}
const Content = (props: contentProps): JSX.Element => {
    return (
        <div className="row">
            <div className="number">{props.number}</div>
            <div className="title">{props.title}</div>
            <div className="writer">{props.writer}</div>
            <div className="modifyDate">{props.modifyDate}</div>
        </div>
    )
}

const BoardFooter = (): JSX.Element => {
    return (
        <div className="boardFooter">
            <div className="boardNavgation">
                <button className="clickable">처음</button>
                <button className="clickable">이전</button>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <button className="clickable">다음</button>
                <button className="clickable">마지막</button>
            </div>
        </div>
    )
}

export default Board
