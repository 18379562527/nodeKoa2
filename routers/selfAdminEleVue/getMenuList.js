const router = require('koa-router')();
const asyncRouters = require('../../public/json/asyncRouters.js')
const defaultRouters = require('../../public/json/defaultRouters.js')
let setbackData = require('../../public/js/common/setbackData')

// // 设置请求返回数据
// function setbackData(state,data,message,errorCode) {
//     return {
//         state,
//         data,
//         message,
//         errorCode: errorCode ? errorCode : null
//     }
// }
router.post('/',async(ctx)=>{
    console.log('request',ctx.request)
    console.log('response',ctx.response)
    console.log('ctx.request.body',ctx.request.body)
    console.log('ctx.request.body',ctx.request.body.role)
    if(ctx.request.body.role === 'admin'){
        ctx.body = setbackData(1,asyncRouters,'调用成功');
    }else if(ctx.request.body.role === 'member'){
        ctx.body = setbackData(1,defaultRouters,'调用成功');
    }else{
        ctx.body = setbackData(0,null,'暂无权限','404');
    }
})

module.exports = router.routes();