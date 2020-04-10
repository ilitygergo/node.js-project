import { v4 as uuidv4 } from 'uuid'
import userModel from '../models/userModel'

const users = []

const getAutoSuggestUsers = async (loginSubstring: string, limit: number) => {
    const limitedUsers = []

    users.slice(0, limit).forEach((user) => {
        if (user.login.includes(loginSubstring)) {
            limitedUsers.push(user)
        }
    })

    return limitedUsers.sort((a, b) => (a.login > b.login ? 1 : -1))
}

const create = async (data: userModel) => {
    const user = {
        id: uuidv4(),
        login: data.login,
        password: data.password,
        age: data.age,
        isDeleted: false,
    }

    users.push(user)

    return user
}

const getById = async (userId: uuidv4) =>
    users.find((user) => user.id === userId)

const update = async (userId: uuidv4, data: any) => {
    const userToUpdate = users.find((user) => user.id === userId)

    Object.keys(data).forEach((key) => {
        if (key in userToUpdate) {
            userToUpdate[key] = data[key]
        }
    })

    return userToUpdate
}

const setIsDeletedFlag = async (userId: uuidv4) => {
    const userToDelete = users.find((user) => user.id === userId)

    if (userToDelete) {
        Object.keys(userToDelete).forEach((key) => {
            if (key === 'isDeleted') {
                userToDelete[key] = true
            }
        })

        return true
    }
    return false
}

export default {
    getAutoSuggestUsers,
    create,
    getById,
    update,
    remove: setIsDeletedFlag,
}
