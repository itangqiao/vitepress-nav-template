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
        desc: '',
        link: 'https://nodejs.org/zh-cn',
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '',
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
        desc: '快速找到命令和使用说明',
        link: 'https://wangchujiang.com/linux-command/list.html',
      },
      {
        icon: '/icons/EzDoc.svg',
        title: 'EzDoc',
        desc: '一些精品中文翻译文档库',
        link: 'https://ezdoc.cn/',
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
