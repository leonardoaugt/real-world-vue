<template>
  <div>
    <h1>Certificates Listing</h1>
    <CertificateCard/>

    <router-link :to="{ name: 'certificate-show', params: { id: 1 } }">Show Certificate #1</router-link>|
  </div>
</template>

<script>
import CertificateCard from '@/components/CertificateCard.vue'

export default {
  components: {
    CertificateCard
  }
}
</script>

<style scoped>
</style>