/*
  * role 不添加时表明改路由不需要权限
  */
  import index from '@/views/index';
  import module1 from '@/views/module1';
  import module2 from '@/views/module2';
  
  const adminRole = ['superadmin', 'admin', 'user'];
  export const config = {
    title: '',
    path: '/',
    component: index,
    children: [
      {
        title: '主机管理',
        layoutTitle: '主机列表',
        icon: 'iconfont icon-diannao',
        path: 'hostManagement',
        component: module1,
        isNav: true
      },
      {
        title: '数据收集',
        layoutTitle: '收集器列表',
        icon: 'iconfont icon-shuju',
        path: 'dataCollection',
        component: module2,
        isNav: true,
        role: adminRole
      }
    ]
  };
  