import express from "express";
import routes from './routes'

class AppController {
    constructor(){
        this.express = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.express.use(express.json())
    }

    routes(){
        this.express.use(routes)
    }

}

module.exports = new AppController().express