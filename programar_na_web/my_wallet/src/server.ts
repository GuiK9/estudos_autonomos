import express from 'express'

import { routes } from './routes'

const app = express()

app.use(routes)

app.listen(3000, () => {
    console.log('server is running on port 3000')
})
