<template>
  <div>
    <h1>Create an Certificate, {{ user.name }}</h1>
    <p>This is user ID {{ user.id }}</p>
    <p>There are {{ getCertificateById(2) }} categories</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCertificateById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped>
</style>