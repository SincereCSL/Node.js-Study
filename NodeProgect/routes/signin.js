
const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkLogin

//Get /signin 登录页
router.get('/',checkNotLogin,function (req,res,next) {
    res.send('登录页')
})

//Post /signin 用户登录
router.post('/',checkNotLogin,function (req,res,next) {
    res.send('登录')
})

module.exports = router