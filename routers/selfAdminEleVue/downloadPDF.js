const router = require('koa-router')();
const fs = require('fs');
const path = require('path');
router.post('/',async(ctx)=>{
    console.log(ctx)
    ctx.res.setHeader('Content-type', 'application/octet-stream');
    ctx.res.setHeader('Content-Disposition', `attachment;filename=a4.pdf`); 
    ctx.body = fs.createReadStream(path.join(__dirname,"../../public/pdf/a4.pdf"));
})

module.exports = router.routes();