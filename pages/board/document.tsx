import BoardLayout from "../../components/BoardLayout"
import { API_readDocument } from "../../apis/board"
import Document from "../../components/board/Document"
import { getCookie } from "../../utils/utils"
const DocumentPage = (props) => {
    return (
        <BoardLayout title="document - chinoBoard">
            <header>
                <div className="titleWrap">
                    <h2>게시글 페이지</h2>
                    <p>게시글 페이지 입니다. 수정 및 삭제가 가능합니다.</p>
                </div>
            </header>
            <main className="boardPage">
                <Document
                    title={props.data.title}
                    contents={props.data.contents}
                    hash={props.hash}
                />
            </main>
        </BoardLayout>
    )
}

export async function getServerSideProps(context) {
    const jwt = getCookie(context.req.headers.cookie, "jwt")
    const AUTH_TOKEN = jwt
    try {
        const hash = context.query.hash as string
        const response = await API_readDocument({ hash, AUTH_TOKEN })
        return { props: { data: response.data.result, hash } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}

export default DocumentPage
