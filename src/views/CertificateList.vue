<template>
  <div>
    <h1>Certificates Listing</h1>
    <CertificateCard/>
    <BaseIcon/>
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