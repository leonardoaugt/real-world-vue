<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This is user ID {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['user', 'categories'])
}
</script>

<style scoped>
</style>