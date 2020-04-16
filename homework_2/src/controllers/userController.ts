import { Request, Response, NextFunction } from 'express'
import validator from 'validator'
import userService from '../services/userService'

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const loginSubstring = req.query.loginSubstring
        ? req.query.loginSubstring.toString()
        : ''
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10
    const users = await userService.getAutoSuggestUsers(loginSubstring, limit)

    if (users.length > 0) {
        return res.json(users)
    }
    return res.status(204).json({})
}

const create = async (req: Request, res: Response, next: NextFunction) => {
    if (req.body) {
        const user = await userService.create(req.body)
        return res.json(user)
    }
    return res.status(400).json({})
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id && validator.isUUID(req.params.id)) {
        const user = await userService.getById(req.params.id)

        if (user) {
            return res.json(user)
        }
        return res.status(204).json({})
    }

    return res.status(204).json({})
}

const update = async (req: Request, res: Response, next: NextFunction) => {
    if (req.body && req.params.id) {
        return userService
            .update(req.params.id, req.body)
            .then((user) => {
                if (user) {
                    return res.json(user)
                }
                return res.status(204).json({})
            })
            .catch(() => {
                return res.status(400).json({})
            })
    }
    return res.status(400).json({})
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
        const isDeleted = await userService.remove(req.params.id)

        if (isDeleted) {
            return res.json({})
        }
        return res.status(204).json({})
    }

    return res.status(204).json({})
}

export default {
    create,
    getAll,
    getById,
    update,
    remove,
}
