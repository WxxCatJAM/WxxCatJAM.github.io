module.exports = {
    title: 'wx的数学公式总结',
    description: '主要为数学1的公式',
    // host: "127.0.0.1",
    port: "4001",
    repo: "https://github.com/wxxxxxxxxxxxxxxx/VuePress-MathFunction.git",
    // themeConfig: {
    //     // 添加导航栏
    //     nav: [
    //         { text: 'vue', link: '/' },
    //         { text: 'wx', link: '/wx/' }
    //     ]
    // }
    plugins: [
        [   //yarn add -D vuepress-plugin-mathjax
            'vuepress-plugin-mathjax',
            {
                target: 'katex',
                macros: {
                "\\RR": "\\mathbb{R}"
                }
            }
        ]
    ],
    themeConfig:{
        nav: [
            {text: "主页", link: "/"},
            { text: "公式总结",
                items: [
                    { text: "常用公式", link: "pages/General/General_Formula.md" },
                    { text: "高等数学基础", link: "pages/Advanced/Advanced_Mathematics.md" },
                    { text: "线性代数",  link: "pages/Linear/Matrix.md" 
                    //   items: [ 
                    //     { text: "行列式", link:"./Linear/"},
                    //     { text: "矩阵", link:"./Linear/Matrix.md"},
                    //     { text: "向量", link:"./Linear/Vector.md"},
                    //     { text: "线性方程数组", link:"/web/css/"},
                    //     { text: "二次型", link:"/web/css/"},
                    //    ]
                    },
                    { text: "概率论与数理统计", link: "pages/PS/PS.md"}
                ]
            }, 
          ],
        sidebar: [
            '/',
            '/pages/General/General_Formula.md',
            '/pages/Advanced/Advanced_Mathematics.md',
            '/pages/Linear/Matrix.md',
            '/pages/PS/PS.md'
        ],
        sidebarDepth:2, //使H3也能在侧边栏显示出来
  }
}