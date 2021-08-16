const router = require('koa-router')();
const adminMenu = require('../../public/json/AdminMenu.js')
const unAdminMenu = require('../../public/json/unAdminMenu.js')
let setbackData = require('../../public/js/common/commonFunc')
router.post('/',async(ctx)=>{
    console.log('request',ctx.request)
    console.log('response',ctx.response)
    console.log('ctx.request.body',ctx.request.body)
    console.log('ctx.request.body',ctx.request.body.role)

    if(ctx.request.body.role === 'admin'){
        ctx.body = setbackData(1,adminMenu,'调用成功');
    }else if(ctx.request.body.role === 'member'){
        ctx.body = setbackData(1,unAdminMenu,'调用成功');
    }else{
        ctx.body = setbackData(0,null,'暂无权限','404');
    }
})

module.exports = router.routes();