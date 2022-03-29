import { Router } from "express";

import { CreateUserService } from '../services/CreateUserService'

/* 
Model - Estrutura de dados;
Repository - Comunicação do banco de dados
Service - Regra de negócio
 */

const usersRoutes = Router()

usersRoutes.post('/', (req, res) => {

     const { name, email, password, cpf } = req.body


    const createUserService = new CreateUserService()

    const user = createUserService.execute({name, email, password, cpf})

})

export { usersRoutes }
