import axios from 'axios';
import { 
    GET_USERS,
    GET_BOOKS
} from '../services/APIEndPoints.js';

export default class APIService {

    async loginUser(params) {
        let response;
        await axios.post(GET_USERS, params)
            .then(res => {
                response = res.data;
            })
            .catch(err => {
                console.error(err);
            });
        return response;
    }

    async getBooks(payload) {
        let response;
        await axios.get(
            GET_BOOKS,
            {
                auth: {
                    username: payload.username,
                    password: payload.password,
                }
            }
            )
            .then(res => {
                response = res.data;
            })
            .catch(err => {
                console.error(err);
            });
        return response;
    }
}