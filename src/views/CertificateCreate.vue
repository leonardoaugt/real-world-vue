<template>
  <div>
    <h1>Create an Certificate</h1>
    <form @submit.prevent="createCertificate">
      <label>Select a category</label>
      <select v-model="certificate.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your certificate</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="certificate.title" type="text" placeholder="Add an certificate title">
      </div>
      <div class="field">
        <label>Description</label>
        <input v-model="certificate.description" type="text" placeholder="Add a description">
      </div>
      <h3>Where is your certificate?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="certificate.location" type="text" placeholder="Add a location">
      </div>
      <h3>When is your certificate?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="certificate.date" placeholder="Select a date"/>
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="certificate.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit">
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(`${i}:00`)
    }
    return {
      times,
      categories: this.$store.state.categories,
      certificate: this.createFreshCertificateObject()
    }
  },
  methods: {
    createCertificate() {
      this.$store.dispatch('createCertificate', this.certificate)
    },
    createFreshCertificateObject() {
      const id = Math.floor(Math.random() * 10000000)
      const user = this.$store.state.user

      return {
        id: id,
        user: user,
        organizer: user,
        description: '',
        location: '',
        date: '',
        time: '',
        title: '',
        category: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>