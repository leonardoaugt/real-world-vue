<template>
  <div>
    <h1>Certificates Listing</h1>
    <CertificateCard
      v-for="certificate in certificates"
      :key="certificate.id"
      :certificate="certificate"
    />
  </div>
</template>

<script>
import CertificateCard from '@/components/CertificateCard.vue'
import CertificateService from '@/services/CertificateService.js'

export default {
  components: {
    CertificateCard
  },
  data() {
    return {
      certificates: []
    }
  },
  created() {
    CertificateService.getCertificates()
      .then(response => {
        this.certificates = response.data
      })
      .catch(error => {
        console.log(`There was an error ${error.response}`)
      })
  }
}
</script>

<style scoped>
</style>