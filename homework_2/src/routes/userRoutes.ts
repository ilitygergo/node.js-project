import { Router, Request, Response, NextFunction } from 'express'
import userController from '../controllers/userController'

const router = Router()

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    userController.create(req, res, next)
})

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    userController.getAll(req, res, next)
})

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    userController.getById(req, res, next)
})

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    userController.update(req, res, next)
})

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    userController.remove(req, res, next)
})

export default router
