<template>
  <div>
    <h1>Create an Certificate, {{ user.name }}</h1>
    <p>This is user ID {{ user.id }}</p>
    <p>There are {{ getCertificate(1) }} categories</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    getCertificate() {
      return this.$store.getters.getCertificateById
    },
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped>
</style>