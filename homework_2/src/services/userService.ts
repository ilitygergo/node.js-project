import { Op } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'
import User from '../models/userModel'

const getAutoSuggestUsers = async (
    loginSubstring: string,
    limit: number
): Promise<User[]> => {
    return User.findAll({
        where: {
            login: {
                [Op.like]: `%${loginSubstring}%`,
            },
        },
        limit,
        order: [['login', 'ASC']],
    })
}

const create = async (data: User): Promise<User> => {
    return User.create({
        login: data.login,
        password: data.password,
        age: data.age,
        isDeleted: data.isDeleted,
    })
}

const getById = async (userId: uuidv4): Promise<User> => {
    return User.findOne({
        where: {
            id: userId,
        },
    })
}

const update = async (userId: uuidv4, data: User): Promise<User> => {
    return User.findOne({
        where: {
            id: userId,
        },
    }).then((user) => {
        user.update(data)
    })
}

const setIsDeletedFlag = async (userId: uuidv4): Promise<User> => {
    return User.findOne({
        where: {
            id: userId,
        },
    }).then((user) => {
        user.update({
            isDeleted: true,
        })
    })
}

export default {
    getAutoSuggestUsers,
    create,
    getById,
    update,
    remove: setIsDeletedFlag,
}
