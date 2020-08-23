import Document from "../../components/board/createDocument"
import BoardLayout from "../../components/BoardLayout"

const WritePage = () => {
    return (
        <BoardLayout>
            <header>
                <div className="titleWrap">
                    <h2>글작성 페이지</h2>
                    <p>게시글을 작성하는 페이지입니다.</p>
                </div>
            </header>
            <main className="boardPage">
                <Document />
            </main>
        </BoardLayout>
    )
}

export default WritePage
