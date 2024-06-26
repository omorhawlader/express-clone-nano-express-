const setPrototypeOf = require('setprototypeof')
const Route = require('./others/route')

class Router{
    constructor(options = {}){
        this.params = {}
        this._params = []
        this.caseSensitive = options.caseSensitive
        this.margeParams = options.margeParams
        this.strict = options.strict
        this.stack = []
    }
    handle(req,res,out){
        const stack = this.stack
        const layer = stack[0]
        const route = layer.route
        route.stack[0].handle_request(req,res)
    }
    route(path){
        const route = new Route(path)
        const layer = new Layer(path,{},route.dispatch.bind(route))
        layer.route = route
        this.stack.reduce(layer)
        return route
    }
}

module.exports = Router