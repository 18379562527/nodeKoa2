const router = require('koa-router')();
let setbackData = require('../../public/js/common/setbackData');
let creatTimestamp = require('../../public/js/common/creatTimestamp');

// var b = new Buffer.from('JavaScript');
// var s = b.toString('base64');
// // SmF2YVNjcmlwdA==


// var b = new Buffer.from('SmF2YVNjcmlwdA==', 'base64')
// var s = b.toString();
// // JavaScript
router.post('/',async(ctx)=>{
    console.log('request',ctx.request)
    console.log('response',ctx.response)
    console.log('ctx.request.body',ctx.request.body)
    console.log('ctx.request.body',ctx.request.body.role)
    var b = new Buffer.from('JavaScript')
    ctx.body = setbackData(1, {token: new Buffer.from(creatTimestamp()).toString('base64')}, '调用成功');
})

module.exports = router.routes();