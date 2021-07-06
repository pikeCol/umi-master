import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api/app1': {
      target: 'http://localhost:8001',
      changeOrigin: true,
    },
    '/api/app2': {
      target: 'http://localhost:8002',
      changeOrigin: true,
    },
    '/api/app3': {
      target: 'http://localhost:8003',
      changeOrigin: true,
    },
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8001/app1', // html entry
        },
      ],
    },
  },
  routes: [
    {
      path: '/',
      // component: '@/pages/index',
      component: '../layouts/index.js',
      routes: [
        {
          path: '/app1',
          microApp: 'app1',
        },
        // {
        //   path: '/app2',
        //   component: './subContainer',
        // },
        {
          path: '/',
          component: './index',
        },
      ],
    },
  ],
  fastRefresh: {},
});
