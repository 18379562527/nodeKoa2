var router = require('koa-router')();
let downloadPDF = require('./downloadPDF.js');
let getMenuList = require('./getMenuList.js');
let login = require('./login.js');

router.use('/downloadPDF',downloadPDF)
router.use('/getMenuList',getMenuList)
router.use('/login',login)


router.get('/', (ctx) => {
    console.log(ctx)
    ctx.body = '这是后台管理系统首页';
});
module.exports = router.routes();