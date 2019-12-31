
const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)

exports.User = mongolass.model('User',{
    name:{type:'string',required:true},
    password:{type: 'string',required: true},
    avatar:{type:'string',required:true},//头像
    gender:{type:'string',emum: ['m', 'f', 'x'], default: 'x'},
    bio:{type:'string',required:true}
})
exports.User.index({name:1,unique:true}).exec()