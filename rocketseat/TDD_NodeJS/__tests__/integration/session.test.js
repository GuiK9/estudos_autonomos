const { User } = require('../../src/app/models/User')

describe('authentication', () => {
    it('should sum two numbers', async () => {

        const user = await User.create({
            name: "diego", 
            email:"diego@gmail.com", 
            password_hash: "1223"
        })

        console.log(user)

        expect(user.email).toBe("diego@gmail.com")
    })
})