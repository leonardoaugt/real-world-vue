import Vue from 'vue'
import Vuex from 'vuex'
import CertificateService from '@/services/CertificateService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education'
    ],
    certificates: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ]
  },
  mutations: {
    ADD_CERTIFICATE(state, certificate) {
      state.certificates.push(certificate)
    }
  },
  actions: {
    createCertificate({ commit }, certificate) {
      return CertificateService.postCertificate(certificate).then(() => {
        commit('ADD_CERTIFICATE', certificate)
      })
    }
  },
  getters: {
    getCertificateById: state => id => {
      return state.certificates.find(certificate => certificate.id === id)
    }
  }
})
