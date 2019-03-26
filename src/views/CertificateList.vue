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
import axios from 'axios'

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
    axios
      .get('http://localhost:3000/certificates')
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