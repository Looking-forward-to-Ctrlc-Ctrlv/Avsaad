let mongoose = require('mongoose')
let URI ="mongodb+srv://subhranshu:9O9OFKElJSqlzw1d@cluster0.lfybvod.mongodb.net/?retryWrites=true&w=majority"

let connectdb = async()=>{
try{
let con = await mongoose.connect(URI,{useUnifiedTopology : true,
  useNewUrlParser: true })
  console.log("database is connected with the given URI ")
}
catch(err){
console.log(err)
}
}  
module.exports = connectdb