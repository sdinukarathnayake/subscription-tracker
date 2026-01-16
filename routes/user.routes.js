import { Router } from "express";

const userRouter = Router();

userRouter.post('/', (req, res) => {
    res.send({
        title: 'Create new user'
    })
});

userRouter.get('/', (req, res) => {
    res.send({
        title: 'Get all users'
    })
});

userRouter.get('/:id', (req, res) => {
    res.send({
        title: 'Get user  detail'
    })
});

userRouter.put('/:id', (req, res) => {
    res.send({
        title: 'Update current user'
    })
});

userRouter.delete('/:id', (req, res) => {
    res.send({
        title: 'Delete current user'
    })
});

export default userRouter;