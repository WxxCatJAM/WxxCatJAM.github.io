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
        nav: [{text: "主页", link: "/"},
            { text: "目录",
                items: [
                    { text: "常用公式", link: "pages/General/General_Formula.md" },
                    { text: "高等数学基础", link: "pages/Advanced/Advanced_Mathematics.md" },
                    { text: "线性代数", 
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
        sidebar: {
            '/pages/General/':[         
                {
                    title: '常用公式',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['Advanced_Mathematics.md', '常用公式总结'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                    ]
                }
            ],
            '/pages/Advanced/':[
                {
                    title: '高数公式总结',
                    collapsable: false, 
                    children: [
                        ['Advanced_Mathematics.md.md', '高数公式']
                    ]
                }
            ],
            '/pages/Linear/':[
                {
                    title: '线代公式总结',
                    collapsable: false, 
                    children: [
                        ['Matrix.md', '矩阵']
                        ['Vector.md', '向量']
                    ]
                },
            ],
            '/pages/PS/':[
                {
                    title: '概率论与数理统计',
                    collapsable: false, 
                    children: [
                        ['PS.md', '概数总结']
                    ]
                }
            ],
        }
      }
  }
  