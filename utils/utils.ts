export const getCookie = (ck, name) => {
    const cookiesArr = ck.split(";")
    const cookies = cookiesArr.map((cookie) => {
        const entry = cookie.split("=")
        return { key: entry[0].trim(), value: entry[1] }
    })
    return cookies.find((cookie) => cookie.key === name)?.value
}
