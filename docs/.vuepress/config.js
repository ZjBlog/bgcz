module.exports = {
  theme: 'zjblog',
  title: '猿码集-程序猿进击之路',
  description: '猿码集,每天进步一点点.',
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico'}],
      ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  ga: 'UA-126556382-1',
  serviceWorker: true,
  locales:{
    '/': {
      lang: 'zh-CN'
    }
  },
  // fuck IE
  evergreen: true,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-task-lists')) // 一个 checkbox 的 TODO List 插件
        .use(require('markdown-it-imsize'), { autofill: true }) // 支持自定义 md 图片大小 ![](http://test.png =200x200)
    }
  },
// 主题的一些配置
  themeConfig: {
  locales:{
    '/': {
      lang: 'zh-CN', // this will be set as the lang attribute on <html>
      selectText: '默认语言',
      // 该语言在下拉菜单中的标签
      label: '简体中文'
    }
  },
  serviceWorker: {
    updatePopup: { 
       message: "文章有更新", 
       buttonText: "刷新" 
    }
  },
  zjemail: 'zhangjun521ly@gmail.com',
  zjgithub: 'https://github.com/zjblog',
  zjoverflow:'https://stackoverflow.com//users/6622851/mr-zhang',
  zjwx: 'https://blog-1255892226.cos.ap-beijing.myqcloud.com/xyqs.jpg',
  zjHome: '',
  zjurl:[{url:'https://www.bangechengzi.com/',name:'半个橙子'}],
  baidpush: false,
  cnzzUrl: '',
  // 博客背景图片
  background: '/bd.jpg',
  backgroundUrl: 'https://www.bangechengzi.com/img/',
  // 博客的 logo
  logo: '/bgcz.png',
  // 定制文章标题颜色
  accentColor: 'black',
  // 每页显示的文章数量
  per_page: 5,
  // 创建文章的时间格式, 不设则不显示 可选 [yyyy-MM-dd HH:mm:ss]
  date_format: 'yyyy-MM-dd',
  // 开启标签功能
  tags: true,
  // vssue 的配置项, 不支持 flipMoveOptions
  comment: {
    owner: 'ZjBlog',
    repo: 'bgcz',
    clientID: 'e9b96defb46455fed1a9',
    clientSecret: '0f84513efabb6bf82b91258f2f5bcce35eac487f',
    admin:['ZjBlog'],
    perPage: 5,
    distractionFreeMode: false  // Facebook-like distraction free mode
  },
  nav: [
    { text: '首 页', link: '/', root: true }, // 指定它为博客根目录
    { text: '笔 记', link: '/home/',root: true},
    { text: '标 签', link: '/tags/', tags: true }, // 指定它为标签目录
    { text: '半个橙子', link: 'https://www.bangechengzi.com/'},
    { text: 'GitHub', link: 'https://github.com/ZjBlog' }
  ]
 }
}
