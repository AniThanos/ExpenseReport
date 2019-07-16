const express=require('express');
const router=express.Router();
const url=require('../config/urlConfig')
const request =require('request')
//get all transactions
router.get('/',(req,res)=>{
    request.get(`${url.dbUrl}/api/transactions`,(err,data)=>{
        if(err) return res.status(500).json({msg:"Data Not available"})
        return res.send(JSON.parse(data.body))
    })
})

//add transactions
router.post('/addTransactions',(req,res)=>{
    
})

module.exports=router;