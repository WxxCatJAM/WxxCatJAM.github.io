module.exports = {
    title: 'wx的数学公式总结',
    description: '主要为数学1的公式',
    repo: "https://github.com/wxxxxxxxxxxxxxxx/VuePress-MathFunction.git",
    // themeConfig: {
    //     // 添加导航栏
    //     nav: [
    //         { text: 'vue', link: '/' },
    //         { text: 'wx', link: '/wx/' }
    //     ]
    // }
    themeConfig:{
        nav: [{text: "主页", link: "/"      },
            { text: "node", link: "/node/" },
            { text: "前端", 
              items: [ 
                { text: "html", link:"/web/html/"},
                { text: "css", link:"/web/css/"},
                ]
            },
            { text: "数据库", link: "/database/"   },
            { text: "android", link: "/android/"   },
            { text: "面试问题", link: "/interview/" }
          ],
        sidebar: auto
      }
  }
  