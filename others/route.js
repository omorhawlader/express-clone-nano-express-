module.exports = Route;
const methods = require('methods');
const flatten = require('array-flatten');
const Layer = require('./others/Layer')


function Route(path){
    this.path = path
    this.stck = []

    this.methods = {}
}

Route.prototype.dispatch = function dispatch(req,res,done) {

};

methods.forEach(method=>{
    Route.prototype[method] = ()=>{
        const handles = flatten(Array.prototype.slice.call(arguments))
        for(let i = 0;i < handles.length; i++){
            const handle = handles[i]
            if(typeof handle !== 'function'){
                const type = toString.call(handle)
                const msg = 'Route.' + method + '() requires a callback function but got a' + type
                throw new Error(msg)
            }
            const layer = Layer('/', {}, handle);
            layer.method = method

            this.methods[method] = true
            this.stack.push(layer)
        }
        return this
    }
})