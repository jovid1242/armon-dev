import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.armon.tj/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default http
