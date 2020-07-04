/**
 * 使用主框架
 * 1、a:b  a=跳转路径 b=文件路径 (views/b/index.vue）
 * 2、a:{path:跳转路径，redirect:重定向，children:二级路由}
 * 3、使用的递归，可以使用多级路由
 */
const routesLayout = {
  '/course1': 'Course/Page1',
  '/course2': 'Course/Page2',
  '/activity': {
    path: '/activity',
    redirect: '/activity/page1',
    children: {
      '/activity/page1': 'Activity/Page1',
      '/activity/page2': 'Activity/Page1'
    }
  }
}
/**
 * 单独页面，如登陆，404页面
 */
const routesAlone = { '/login': 'Account/Login', '/error-page': 'ErrorPage' }

export { routesLayout, routesAlone }
