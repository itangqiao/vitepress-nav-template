import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const FULL_STACK_DATA: NavData[] = [
  {
    title: 'Node 相关',
    items: [
      {
        icon: '',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn',
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn',
      },
    ],
  },
  {
    title: 'Linux',
    items: [
      {
        icon: '/icons/linux.svg',
        title: 'Linux 命令搜索',
        desc: '',
        link: 'https://wangchujiang.com/linux-command/list.html',
      },
      {
        icon: '/icons/EzDoc.svg',
        title: 'EzDoc',
        desc: '翻译精品 - 中文开发文档库',
        link: 'https://docs.nestjs.cn',
      },
      {
        icon: '',
        title: '快乐的 Linux 命令行',
        desc: 'The Linux Command Line 中文版',
        link: 'https://billie66.github.io/TLCL/book/',
      },
    ],
  },
]
