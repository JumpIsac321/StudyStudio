express = require("express")
router = express.Router()

router.get('/',(req,res) => {
    res.render('join-game')
})

module.exports = router