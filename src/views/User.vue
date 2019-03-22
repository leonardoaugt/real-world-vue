<template>
  <h2>
    This is
    <i>{{ username }}</i>'s page
  </h2>
</template>

<script>
export default {
  props: ['username']
}
</script>
