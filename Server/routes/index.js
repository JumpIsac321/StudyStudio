// Not used will delete file later

const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    res.send("trust me im fine *sweats nervously* ").status(201)
})

module.exports = router
