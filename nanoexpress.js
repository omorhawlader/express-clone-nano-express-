
const http = require('http')
const Router = require('./router')
class NANOExPRESS {
    constructor(){
        this.init()
    }


    init(){
        this.cache = {}
        this.engines = {}
        this.settings = {}
        this._router = undefined
    }
    lazyrouter(){
        if(!this._router){
            this._router = new this._router()
        }
    }

    handle(req,res,next){
        this._router.handle(req,res)
    }

    listen(...args){
        const server = http.createServer(this.handle.bind(this))

        return server.listen(...args)
    }

}

const createNanoExpress = () => {
    const nano = new NANOExPRESS();
    return nano
}

module.exports = createNanoExpress