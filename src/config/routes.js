import { lazy } from "react";
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

// 使用路由懒加载
// lazy不能单独使用，必须配置Suspence组件才能一起使用
// const Home = lazy(() =>
//   import(
//      "../pages/Home/Home"
//   )
// );
//定义数组存放route，根据其动态渲染route
const routes = [
  
  {
    path: "/",
    component: Home,
    exact:true
  },{
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];

export default routes;