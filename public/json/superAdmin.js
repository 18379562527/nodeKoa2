module.exports = [
    {
        route: '/',
        title: '首页',
        icon: 'component',
    },
    {
        route: '/downloadPDF',
        title: 'PDF下载',
        icon: 'pdf',
    },
    {
        route: '/API',
        name: '组件API',
        icon: 'API',
        children:[
            {
                route: '/API/commonTab',
                title: '表格组件',
            },
        ]
    },
]
