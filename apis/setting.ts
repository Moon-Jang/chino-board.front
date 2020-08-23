import axios from "axios"

const API = axios.create({
    baseURL: "http://127.0.0.1:3000/prod",
    timeout: 10000,
    headers: {
        // Authorization: "bearer " + AUTH_TOKEN,
        /* 'Access-Control-Allow-Origin': '*',
        'Access-Control-Aloow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Max-Age': 3600,
        'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization' */
    },
})

export default API
