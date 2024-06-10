import { TODO_URL } from '../utils/constants';
import axios from 'axios';

export const getTodos = async () => {
    const response = await axios.get(`${TODO_URL}`);

    return response.data;
}

export const addTodo = async (body: string) => {
    const response = await axios.post(`${TODO_URL}`, { body });

    return response.data;
}