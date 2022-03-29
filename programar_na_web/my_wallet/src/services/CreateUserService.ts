interface IRequest {
    name: string
    email: string
    password: string
    cpf: string
}


class CreateUserService {


    execute( { name, email, password, cpf }: IRequest ) {

    }
}

export { CreateUserService }
