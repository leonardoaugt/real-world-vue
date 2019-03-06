import Vue from 'vue'
import Router from 'vue-router'
import CertificateList from './views/CertificateList.vue'
import CertificateShow from './views/CertificateShow.vue'
import CertificateCreate from './views/CertificateCreate.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // Remove hash from url
  routes: [
    {
      path: '/',
      name: 'certificate-list',
      component: CertificateList
    },
    {
      path: '/certificate/:id',
      name: 'certificate-show',
      component: CertificateShow,
      props: true
    },
    {
      path: '/certificate/create',
      name: 'certificate-create',
      component: CertificateCreate
    },
    {
      path: '/user/:username',
      name: 'user',
      component: User,
      props: true
    }
  ]
})
