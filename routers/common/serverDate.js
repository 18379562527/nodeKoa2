const router = require('koa-router')();

router.get('/',async(ctx)=>{
    ctx.body="这是前台首页";
})

module.exports = router.routes();