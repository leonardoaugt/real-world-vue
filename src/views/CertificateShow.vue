<template>
  <h1>Showing certificate #{{ certificate.title }}</h1>
</template>

<script>
import CertificateService from '@/services/CertificateService.js'

export default {
  props: ['id'],
  data() {
    return {
      certificate: {}
    }
  },
  created() {
    CertificateService.getCertificate(this.id) // <--- Send the prop id to our CertificateService
      .then(response => {
        this.certificate = response.data
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      })
  }
}
</script>
