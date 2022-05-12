import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const Users = [
    { name: 'Diego', email: 'diego@gmail.com' }
]


export default {
    async index(req: Request, res: Response) {
        return res.json(Users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService

        emailService.sendMail(
            {
                to: { name: "crlso", email: 'carlos@gmail.com' },
                message: { subject: 'bem-vindo ao sistema', body: 'seja bem-vindo' }
            }
        )

        return res.send()

    }
}