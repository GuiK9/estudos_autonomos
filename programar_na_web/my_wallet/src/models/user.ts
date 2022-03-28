
import { randomUUID } from 'crypto'

interface IItem {
    id: string
    description: number
    date: Date

}

class User {
    id: string

    name: string

    email: string

    cpf: string

    password: string

    account_balance: number

    incomes: Array<IItem>

    outcomes: Array<IItem>

    created_at: Date

    updated_at: Date

    constructor(name: string, email: string, cpf: string, password: string) {
        this.id = randomUUID()
        this.name = name
        this.email = email
        this.cpf = cpf
        this.password = password
        this.account_balance = 0
        this.incomes = []
        this.outcomes = []
        this.created_at = new Date()
        this.updated_at = new Date()
    }
}
