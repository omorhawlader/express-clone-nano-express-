const proto = require('./app.js')
const mixin = require('merge-descriptors');
exports = module.exports = createApp;

function createApp(){
    let app = function (req,res,next){
        app.handle(req,res,next)
    }

    mixin(app,proto,false)
    app.init()
    return app
}

exports.application = proto;
