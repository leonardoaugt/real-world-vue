<template>
  <router-link class="event-link" :to="{ name: 'certificate-show', params: { id: 1 } }">
    Show Certificate #1
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <BaseIcon name="users">
        <span slot="description">{{ event.attendees.length }} attending</span>
      </BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'OS-874921',
        date: '22 Março 2019',
        time: '6:00',
        attendees: [
          { id: 'abc123', name: 'Adalberto Jeripoca' },
          { id: 'def456', name: 'Rodrigo Farofa' }
        ]
      }
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>