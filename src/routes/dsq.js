// 动态问卷相关的路由配置

export default [{
  name: "问卷",
  path: "/",
  component: resolve => require(['Views/index'], resolve),
  children: [
    {
      name: "问卷结构管理",
      path: "/meta",
      component: resolve => require(['Views/FormMetaManager/index'], resolve),
    }
  ]
}]
