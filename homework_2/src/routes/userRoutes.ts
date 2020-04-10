import { Router, Request, Response, NextFunction } from 'express'
import { createValidator } from 'express-joi-validation'
import userController from '../controllers/userController'
import userJoi from '../validators/userValidation'

const router = Router()
const validator = createValidator()

router.post(
    '/',
    validator.body(userJoi),
    (req: Request, res: Response, next: NextFunction) => {
        userController.create(req, res, next)
    }
)

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    userController.getAll(req, res, next)
})

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    userController.getById(req, res, next)
})

router.put(
    '/:id',
    validator.body(userJoi),
    (req: Request, res: Response, next: NextFunction) => {
        userController.update(req, res, next)
    }
)

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    userController.remove(req, res, next)
})

export default router
