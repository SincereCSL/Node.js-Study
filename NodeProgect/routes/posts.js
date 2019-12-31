
const express = require('express')
const router =express.Router()

const checkLogin = require('../middlewares/check').checkLogin

//Get / Posts 所有用户或者特定用户的文章页
//eg:
router.get('/',function(req,res,next){
    res.send('主页')
})

//Post /post/create 发表文章
router.post('/create',checkLogin,function (req,res,next) {
    res.send('发表文章页')
})

//Get /posts/create 发表文章页
router.get('/:postId',function(req,res,next){
    res.send('文章详情页')
})

//Get  /post/ :postId 单独一篇的文章页
router.get('/:postId',function(req,res,next){
    res.send('文章详情页')
})

//Get /posts /:postId/edit 更新文章页
router.get('/:postId/edit',function(req,res,next){
    res.send('更新文章页')
})

//Post /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit',checkLogin,function(req,res,next){
    res.send('更新文章')
})

//Get /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove',checkLogin,function (req,res,next) {
    res.send('删除文章')
})

module.exports = router