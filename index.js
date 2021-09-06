const Koa = require('koa');
const app = new Koa();
const axios = require('axios');
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());
// 1.引入模块化的子路由
var api = require('./routers/selfAdminEleVue/index.js');

// 2.绑定路由
router.use('/api/selfAdminEleVue', api);

//解决跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});

router.get('/', (ctx) => {
    ctx.body = "这是一个首页";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('服务启动了...');
});