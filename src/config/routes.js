import { lazy } from "react";

// 使用路由懒加载
// lazy不能单独使用，必须配置Suspence组件才能一起使用
const Home = lazy(() =>
  import(
     "../pages/Home"
  )
);

const routes = [
  {
    path: "/",
    component: Home,
  },
];

export default routes;