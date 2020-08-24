import ModifyDocument from "../../components/board/ModifyDocument"
import BoardLayout from "../../components/BoardLayout"

const ModifyPage = (props) => {
    return (
        <BoardLayout title="modify document - chinoBoard">
            <header>
                <div className="titleWrap">
                    <h2>글수정 페이지</h2>
                    <p>게시글을 수정하는 페이지입니다.</p>
                </div>
            </header>
            <main className="boardPage">
                <ModifyDocument hash={props.hash} />
            </main>
        </BoardLayout>
    )
}

export async function getServerSideProps(context) {
    const hash = context.query.hash
    return { props: { hash } }
}

export default ModifyPage
