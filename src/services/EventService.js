import axios from 'axios';

const apiClient = axios.create({
    baseURL: `http://my-json-server.typicode.com/davidoliveir4/db`,
    withCredentials: false,
    headers: {
        Accept: `aplication/json`,
        'Content-Type': `aplication/json`
    }
})

export default {
    getEvents() {
        return apiClient.get(`/events`)
    },
    getEvent(id) {
        return apiClient.get(`/events/${ id }`)
    }
}