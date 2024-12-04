module.exports = {

    //title: 'wx的数学公式总结',
    description: '主要为数学1的公式',
    host: "0.0.0.0",
    port: "4001",
    repo: "https://github.com/wxxxxxxxxxxxxxxx/VuePress-MathFunction.git",
    head: [
        ['link', { rel: 'stylesheet', href: '/katex/katex.min.css' }],
        ['link', { rel: 'stylesheet', href: '/style/style.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css' }],
    ],
    markdown: {
        cache: true,
        extendMarkdown: md => {
            //md.set({ breaks: true }); // 支持换行
            md.use(require('markdown-it-katex'),{
                strict: false, // 关闭严格模式，避免警告
            }); // 或 '@swedish-li/markdown-it-katex'，根据实际需要选择
        },
    },
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
                    { text: "概率论与数理统计", link: "pages/PS/PS.md"},
                    { text: "参考文献", link: "pages/Refernce/Reference.md"}
                ]
            }, 
        ],
        sidebar: [
            {
                title: '主页',
                collapsable: true,
                children: [
                  '/',
                ],
            },
            {
                title: '基础公式',
                collapsable: true,
                children: [
                    '/pages/General/General_Formula.md',
                ],
            },
            {
                title: '高数',
                collapsable: true,
                children: [
                    '/pages/Advanced/Advanced_Mathematics01.md',
                    '/pages/Advanced/Advanced_Mathematics02.md',
                ],
            },
            {
                title: '线代',
                collapsable: true,
                children: [
                  '/pages/Linear/Linear_Mathematics.md',
                ],
            },
            {
                title: '概数',
                collapsable: true,
                children: [
                  '/pages/PS/PS.md',
                ],
            },
            {
                title: '参考',
                collapsable: true,
                children: [
                  '/pages/Reference/Reference.md'
                ],
            },
    
        ],
        sidebarDepth:2, //使H3也能在侧边栏显示出来
    },
    plugins:[
        ['smooth-scroll'],
        // ['vuepress-plugin-sidebar',{collapsable:true}]
        ['@vuepress/search',{ //搜索插件
            searchMaxSuggestions: 10
        }],
    ]
};