// 导入路由组件
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
// 导入路由管理工具
import {RouteConfig} from 'react-router-config'

const routes:RouteConfig = [
  {
    path:'/',
    exact:true,
    component:Home
  },
  {
    path:'/about',
    exact:true,
    component:About
  },
  {
    path:'/contact',
    exact:true,
    component:Contact
  }
]

export default routes;