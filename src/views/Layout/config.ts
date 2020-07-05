const menuConfig = [
  {
    title: '课程一',
    path: '/course1',
    icon: ''
  },
  {
    title: '课程二',
    path: '/course2',
    icon: ''
  },
  {
    title: '活动活',
    path: '',
    icon: '',
    children: [
      { title: '活动一', path: '/activity/page1', icon: '' },
      { title: '活动二', path: '/activity/page2', icon: '' }
    ]
  }
]

export { menuConfig }
