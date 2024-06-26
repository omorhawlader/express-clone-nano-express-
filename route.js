const methods = require('methods')
const Layer = require('./layer')

class Route{
    constructor(path){
        this.path = path
        this.stack = []
        this.methods = {}

        methods.forEach(method=>{
            this[method] = (...handlers) => {
                handlers.forEach(handler=>{
                    if(typeof hander !== 'function'){
                        throw new Error(`Route ${method}() requires a callback function but got a ${typeof handler}`)
                    }
                    const layer = new Layer('/',{},handler);
                    layer.method = method
                    this.methods[method] = true
                    this.stack.push(layer)
                })
                return this
            }
        })
    }
    dispatch(req,res,next){
        const method = req.method.toLowerCase()
        for(let layer of this.stack){
            if(layer.method === method){
                return layer.handle_request(req,res,next)
            }
        }
    }
}

module.exports = Route