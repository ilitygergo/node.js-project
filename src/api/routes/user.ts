import { Router, Request, Response, NextFunction } from 'express'
import { createValidator } from 'express-joi-validation'
import userService from '../../services/user'
import userJoi from '../middlewares/userValidation'

const router = Router()
const validator = createValidator()

router.post(
    '/',
    validator.body(userJoi),
    (req: Request, res: Response, next: NextFunction) => {
        userService.create(req, res, next)
    }
)

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    userService.getAll(req, res, next)
})

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    userService.getById(req, res, next)
})

router.put(
    '/:id',
    validator.body(userJoi),
    (req: Request, res: Response, next: NextFunction) => {
        userService.update(req, res, next)
    }
)

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    userService.remove(req, res, next)
})

export default router
