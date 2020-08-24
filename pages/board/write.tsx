import CreateDocument from "../../components/board/CreateDocument"
import BoardLayout from "../../components/BoardLayout"

const WritePage = () => {
    return (
        <BoardLayout title="write document - chinoBoard">
            <header>
                <div className="titleWrap">
                    <h2>글작성 페이지</h2>
                    <p>게시글을 작성하는 페이지입니다.</p>
                </div>
            </header>
            <main className="boardPage">
                <CreateDocument />
            </main>
        </BoardLayout>
    )
}

export default WritePage
