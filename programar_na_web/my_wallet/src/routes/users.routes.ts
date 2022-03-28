import { Router } from "express";

/* 
Model - Estrutura de dados;
Repository - Comunicação do banco de dados
Service - Regra de negócio
 */

const usersRoutes = Router()

usersRoutes.use('/', (req, res) => {
    res.json({msg: "hello wolrd"})
})

export { usersRoutes }
