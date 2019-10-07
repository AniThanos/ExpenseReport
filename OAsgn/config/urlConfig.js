let env=process.env.NODE_ENV||""

module.exports=env=="PRO"?{
    dbUrl:"http://localhost:8082"
}:{
    dbUrl:"http://localhost:3010"
}