import { v4 as uuidv4 } from 'uuid';
import userModel from "./../models/userModel";

const users = [];

const getAutoSuggestUsers = async (loginSubstring: string, limit: number) => {
    let limitedUsers = [];

    users.slice(0, limit).forEach((user) => {
        if (user.login.includes(loginSubstring)) {
            limitedUsers.push(user);
        }
    });

    return limitedUsers;
}

const create = async (data: userModel) => {
    const user = {
        id: uuidv4(),
        login: data.login,
        password: data.password,
        age: data.age,
        isDeleted: false
    };

    users.push(user);

    return user;
}

const getById = async (userId: uuidv4) => {
    return users.find(user => user.id === userId);
}

const update = async (userId: uuidv4, data: any) => {
    let user = users.find(user => user.id === userId);

    Object.keys(data).forEach((key) => {
        user[key] = data[key];
    });

    return user;
}

const setIsDeletedFlag = async (userId: uuidv4) => {
    let user = users.find(user => user.id === userId);

    if (user) {
        Object.keys(user).forEach((key) => {
            if (key === 'isDeleted') {
                user[key] = true;
            }
        });
    
        return true;
    } else {
        return false;
    }
}

export default {
    getAutoSuggestUsers: getAutoSuggestUsers,
    create: create,
    getById: getById,
    update: update,
    remove: setIsDeletedFlag
}
