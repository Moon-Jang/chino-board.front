import Router from "next/router"
import { useState } from "react"
import { API_updateDocument } from "../../apis/board"

const ModifyDocument = (props): JSX.Element => {
    const [inputs, setInputs] = useState({ title: "", contents: "" })
    const { title, contents } = inputs
    console.log("hashsh", props.hash)
    const handleChange = (e) => {
        const target = e.target
        const { value, name } = target
        setInputs({ ...inputs, [name]: value })
    }

    const modify = async () => {
        if (!title || !contents) {
            alert("제목과 내용을 작성해주세요")
            return
        }
        const response = await API_updateDocument({
            hash: props.hash,
            title,
            contents,
            AUTH_TOKEN: localStorage.jwt,
        })
        console.log(response)
        if (response.status !== 200 || !response.status) {
            alert(response.data.error)
            console.log(response)
            return
        }
        Router.back()
    }
    return (
        <div className="documentWrap">
            <div className="documentTitle">
                제목 -&gt; &nbsp;
                <input
                    type="text"
                    name="title"
                    placeholder={"제목을 입력해주세요"}
                    value={title}
                    onChange={handleChange}
                />
            </div>
            <div className="documentContents">
                <textarea
                    name="contents"
                    value={contents}
                    cols={30}
                    rows={10}
                    placeholder="내용을 입력해주세요"
                    onChange={handleChange}
                />
            </div>
            <div className="buttonWrap">
                <button
                    className="clickable"
                    onClick={() => Router.push("/board")}>
                    이전
                </button>
                <button className="clickable" onClick={modify}>
                    수정
                </button>
            </div>
        </div>
    )
}
export default ModifyDocument
