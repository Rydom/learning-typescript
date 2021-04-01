import { Router } from 'express';
import { createUserController } from '../useCases/CreateUser';

const router = Router()

router.post('/', (req, res) => {
    return createUserController.handle(req, res)
})

module.exports = app => app.use('/users', router) 