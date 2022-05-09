import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/404',
      name: '4040',
      component: () => import('@/views/404')
    },
    // {
    //   // Редирект для корретнной работы на GitLab Pages
    //   path: '/',
    //   redirect: '/blogongo-vue/'
    // },
    {
      path: '*',
      redirect: '404'
    },
    {
      path: '/',
      name: 'root',
      component: () => import('@/pages/ArticlesPage')
    },
    {
      path: '/articles/:id',
      name: 'article',
      params: true,
      component: () => import('@/pages/ArticlesPage/_components/ArticlesPageCard/index')
    },
    {
      path: '/createArticle',
      component: () => import('@/pages/ArticlesPage/_components/ArticlesPageAdd/index')
    },
    {
      path: '/registration',
      component: () => import('@/pages/Registration/index')
    },
    {
      path: '/login',
      component: () => import('@/pages/Login/index')
    }
  ]
})
