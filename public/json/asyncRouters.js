module.exports = [
    {
        "id": "1",
        "pid": "0",
        "name": "工作台",
        "url": "/dashboard",
        "icon": "el-icon-s-platform",
        "children": []
    },
    {
        "id": "2",
        "pid": "0",
        "name": "教务管理",
        "icon": "el-icon-s-opportunity",
        "children": [
            {
                "id": "21",
                "pid": "2",
                "name": "学员中心",
                "url": "/educate/student"
            },
            {
                "id": "22",
                "pid": "2",
                "name": "班级管理",
                "url": "/educate/class"
            },
            {
                "id": "23",
                "pid": "2",
                "name": "课程管理",
                "url": "/educate/course"
            },
            {
                "id": "24",
                "pid": "2",
                "name": "课表管理",
                "url": "/educate/table"
            }
        ]
    }
]