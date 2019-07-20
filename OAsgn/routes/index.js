const express = require('express');
const router = express.Router();
const url = require('../config/urlConfig')
const request = require('request')
const fs = require('fs')
let data = require('../data/db.json');
const path = require('path')
//get all transactions
router.get('/', (req, res) => {
    request.get(`${url.dbUrl}/api/transactions`, (err, data) => {
        if (err) return res.status(500).json({ msg: "Data Not available" })
        return res.send(JSON.parse(data.body))
    })
})

//add transactions
router.post('/addTransactions', (req, res) => {
    // console.log(req.body)
    const newExpense = {
        "Category": req.body.category,
        "Item": req.body.item,
        "Amount": req.body.amount,
        "Date": req.body.date
    }

    let dbPath = path.join(__dirname, '../')
    var file = dbPath + '/data/db.json';

    var obj = require(file)
    console.log(obj)
    obj.transactions.push(newExpense)
    fs.writeFileSync(file, JSON.stringify(obj), err => console.log(err))

    res.send("Success")

})

module.exports = router;