import { Router } from "express";


const usersRoutes = Router()

usersRoutes.use('/', (req, res) => {
    res.json({msg: "hello wolrd"})
})

export { usersRoutes }
