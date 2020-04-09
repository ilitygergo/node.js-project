import { v4 as uuidv4 } from 'uuid';

export default interface BookModel {
    id: uuidv4;
    login: String;
    password: String;
    age: Number;
    isDeleted: Boolean;
}
