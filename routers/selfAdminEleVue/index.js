var router = require('koa-router')();
let downloadPDF = require('./downloadPDF.js');
let getMenuList = require('./getMenuList.js');

router.use('/downloadPDF',downloadPDF)
router.use('/getMenuList',getMenuList)

router.get('/', (ctx) => {
    console.log(ctx)
    ctx.body = '这是后台管理系统首页';
});
module.exports = router.routes();