<template>
  <h1>This is
    <i>{{ username }}</i>'s page
  </h1>
</template>

<script>
export default {
  props: ['username']
}
</script>
