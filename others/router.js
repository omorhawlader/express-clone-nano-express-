const setPrototypeOf = require('setprototypeof');
const Route = require('./route');
const Layer = require('./Layer');

const proto = module.exports =options=>{
    const opts = options || {}

    function router(req,res,next){

        router.handle(req,res,next)
    }

    setPrototypeOf(router, proto)

    router.params = {}
    router._params = []
    router.caseSensitive = opts.caseSensitive
    router.margeParams = opts.margeParams
    router.strict = opts.strict
    router.stack = [] //important property
    return router
}

proto.route = function route(path){
    const route = new Route(path)
    

    const layer = new Layer(path,{},route.dispatch.bind(route))

    layer.route  = route

    this.stack.push(layer)

    return route
}