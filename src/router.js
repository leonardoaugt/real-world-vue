import Vue from "vue";
import Router from "vue-router";
import CertificateList from "./views/CertificateList.vue";
import CertificateShow from "./views/CertificateShow.vue";
import CertificateCreate from "./views/CertificateCreate.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "certificate-list",
      component: CertificateList
    },
    {
      path: "/certificate",
      name: "certificate-show",
      component: CertificateShow
    },
    {
      path: "/certificate/create",
      name: "certificate-create",
      component: CertificateCreate
    }
  ]
});
