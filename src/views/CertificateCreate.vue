<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p>This is user ID {{ userID }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    },
    userID() {
      return this.$store.state.user.id
    }
  }
}
</script>

<style scoped>
</style>