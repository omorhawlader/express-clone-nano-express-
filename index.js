const nano = require('./nanoexpress')

const app = nano()

app.get('/',(req,res)=>{
    res.end('my name is omar')
})

app.listen(3000,()=> console.log("running"))