import MinRouter from './MinRouter'
// 配置路由
const router = new MinRouter({
  routes: [
    {
      // 页面路径
      path: 'pages/index/index',
      name: 'index'
    },
    {
      path: 'pages/login/login',
      name: 'login'
    }
  ]
 })
export default router