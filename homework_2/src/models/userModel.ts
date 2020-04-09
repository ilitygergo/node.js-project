import { v4 as uuidv4 } from 'uuid';

export default class BookModel {
    id: uuidv4;

    login: string;

    password: string;

    age: number;

    isDeleted: boolean;
}
