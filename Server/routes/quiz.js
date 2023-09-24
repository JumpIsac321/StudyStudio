// Not used will delete file later

const express = require("express")
const router = express.Router()

router.get('/',(req,res) => {
    res.render('quiz/join-game')
})

module.exports = router