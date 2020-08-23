import { GetStaticProps, GetStaticPaths } from "next"
import BoardLayout from "../../components/BoardLayout"
import { API_readBoard, API_readDocument } from "../../apis/board"
import Document from "../../components/board/Document"
const DocumentPage = (props) => {
    console.log(props.data)
    return (
        <BoardLayout>
            <header>
                <div className="titleWrap">
                    <h2>게시판 페이지</h2>
                    <p>게시판 페이지 입니다.</p>
                </div>
            </header>
            <main className="boardPage">
                <Document
                    title={props.data.title}
                    contents={props.data.contents}
                />
            </main>
        </BoardLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const AUTH_TOKEN =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYnk4NTAyQG5hdmVyLmNvbSIsImlkeCI6NiwiYXV0aCI6MSwiaWF0IjoxNTk4MTY4NDE0LCJleHAiOjE1OTgyMTE2MTR9.wggAXyKVO_bXa7cEaBTAKKRzM9HWpm2i7x1StTOVoU4"

    // Get the paths we want to pre-render based on users
    const response = await API_readBoard({
        curPage: 1,
        listCnt: 10,
        AUTH_TOKEN,
    })
    if (response.status !== 200 || !response.status) {
        return { paths: [], fallback: false }
    }
    const contents = response.data.result
    const paths = contents.map((content) => ({
        params: { hash: content.hash },
    }))
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const AUTH_TOKEN =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYnk4NTAyQG5hdmVyLmNvbSIsImlkeCI6NiwiYXV0aCI6MSwiaWF0IjoxNTk4MTY4NDE0LCJleHAiOjE1OTgyMTE2MTR9.wggAXyKVO_bXa7cEaBTAKKRzM9HWpm2i7x1StTOVoU4"

    try {
        const hash = params?.hash as string
        const response = await API_readDocument({ hash, AUTH_TOKEN })
        return { props: { data: response.data.result } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}

export default DocumentPage
