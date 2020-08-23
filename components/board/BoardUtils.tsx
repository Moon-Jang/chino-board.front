const BoardUtils = (): JSX.Element => {
    return (
        <div className="boardUtils">
            <div className="listCntWrap">
                <select name="listCnt" id="listCnt">
                    <option value="5">5개</option>
                    <option value="10" selected>
                        10개
                    </option>
                    <option value="15">15개</option>
                    <option value="30">30개</option>
                </select>
            </div>
            <div className="writeButtonWrap">
                <button className="writeBtn clickable">글쓰기</button>
            </div>
        </div>
    )
}

export default BoardUtils
