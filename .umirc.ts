import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/login',
      component: '@/pages/login/Login'
    },
    {
      path: '/',
      component: '@/pages/layouts/BasicLayout',
      routes: [
        {
          path: '/list',
          component: '@/pages/survey/SurveyList'
        },
      ]
    },
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': ' ' },
    },
  },
  fastRefresh: {},
});
