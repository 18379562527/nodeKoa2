const router = require('koa-router')();
const superAdmin = require('../../public/json/superAdmin.js')
const admin = require('../../public/json/admin.js')
const visitor = require('../../public/json/visitor.js')
let setbackData = require('../../public/js/common/setbackData')

router.post('/',async(ctx)=>{
    console.log('request',ctx.request)
    console.log('response',ctx.response)
    console.log('ctx.request.body',ctx.request.body)
    console.log('ctx.request.body',ctx.request.body.role)
    if(ctx.request.body.role === 'superAdmin'){
        ctx.body = setbackData(1,superAdmin,'调用成功');
    }else if(ctx.request.body.role === 'admin'){
        ctx.body = setbackData(1,admin,'调用成功');
    }else{
        ctx.body = setbackData(1, visitor,'调用成功','调用成功');
    }
})

module.exports = router.routes();