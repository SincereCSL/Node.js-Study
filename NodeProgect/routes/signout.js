
const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkLogin

//Get //signout 退出
router.get('/',checkNotLogin,function (req,res,next) {
    res.send('退出')
})

module.exports = router