const methods = require('methods')
const NANO = require('./nanoexpress')

class AppMethods{
    constructor(){
        methods.forEach(method=>{
            this[method] = function(path,...handlers){
                this.lazyrouter()
                const route = this._router.route(path)
                route[method](...handlers)
                return this
            }
        })
    }
}

Object.assign(NANO.prototype, new AppMethods())