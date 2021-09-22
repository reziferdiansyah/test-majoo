import axios from 'axios';

const request = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/',
    timeout: 10000
});

export default request;