import axios from 'axios';
import { 
    GET_USERS,
    GET_OR_ADD_BOOKS,
    GET_CATEGORIES
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
            GET_OR_ADD_BOOKS,
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

    async addBook(payload){
        let response;
        await axios.post(
            GET_OR_ADD_BOOKS,
            {
                name: "abc",
                description: "abc",
                quantity: 0,
                category: {
                    id: payload.category.id,
                    name: payload.category.name,
                }
            },
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

    async getCategories(payload) {
        let response;
        await axios.get(GET_CATEGORIES, 
            {
                auth: {
                    username: payload.username,
                    password: payload.password,
                }
            })
            .then(res => {
                response = res.data;
            })
            .catch(err => {
                console.error(err);
            });
        return response;
    }
}