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


// app.use(async (ctx) => {
//     if (ctx.method === 'POST') {
//         // 当POST请求的时候，解析POST表单里的数据，并显示出来
//         let postData = await parsePostData(ctx)
//         console.log(postData)
//     }
// })
/**
 * 解析上下文里node原生请求的post参数
 * */

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            console.log(ctx.req === ctx.request)
            let postData = '';
            ctx.req.addListener('data', (data) => {
                postData += data;
            })
            ctx.req.addListener('end', () => {
                let parseData = parseQueryStr(postData);
                resolve(parseData)
            })
        } catch (err) {
            reject(err)
        }
    })
}

/**
 * 将POST请求的参数字符串解析成json
 */

function parseQueryStr(queryStr) {
    console.log('queryStr', queryStr)
    let queryData = {};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for (let [index, queryStr] of queryStrList.entries()) {
        console.log(index, queryStr)
        let itemList = queryStr.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData
}
router.get('/', (ctx) => {
    ctx.body = "这是一个首页";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('服务启动了...');
});