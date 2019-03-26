<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ certificate.time }} on {{ certificate.date }}</span>
      <h1 class="title">{{ certificate.title }}</h1>
      <h5>Organized by {{ certificate.organizer }}</h5>
      <h5>Category: {{ certificate.category }}</h5>
    </div>
    <BaseIcon name="map">
      <h2 slot="description">Location</h2>
    </BaseIcon>
    <address>{{ certificate.location }}</address>
    <h2>Certificate details</h2>
    <p>{{ certificate.description }}</p>
    <h2>
      Attendees
      <span
        class="badge -fill-gradient"
      >{{ certificate.attendees ? certificate.attendees.length : 0}}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in certificate.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import CertificateService from '@/services/CertificateService.js'

export default {
  props: ['id'],
  data() {
    return {
      certificate: {}
    }
  },
  created() {
    CertificateService.getCertificate(this.id) // <--- Send the prop id to our CertificateService
      .then(response => {
        this.certificate = response.data
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      })
  }
}
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>