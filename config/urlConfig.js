let env=process.env.NODE_ENV||""

module.exports=env=="PRO"?{
    dbUrl:"http://localhost:8082"
}:{
    dbUrl:"https://expensereport-ani.herokuapp.com"
}