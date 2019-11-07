let env=process.env.NODE_ENV||""
const heroku="https://expensereport-ani.herokuapp.com"
const local='http://localhost:3010'
module.exports=env=="PRO"?{
    dbUrl:"http://localhost:8082"
}:{
    dbUrl:local
}