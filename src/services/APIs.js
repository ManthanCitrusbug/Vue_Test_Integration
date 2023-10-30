import axios from 'axios';
import { GET_USERS } from '../services/APIEndPoints.js';

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
}