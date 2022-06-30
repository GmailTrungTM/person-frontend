<template>
    <div class="card size_inside">
      <div class="d-flex flex-row-reverse">
        <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
      <div class="card-body">
        <p class="card-text">{{parsetime(note.createdtime)}}</p>
        <h5 class="card-title">{{ note.title }}</h5>
        <p class="card-text">{{note.body}}</p>
      </div>
      <div class="card-footer">
        <p class="card-text">{{note.done ? 'erledigt' : 'nicht erledigt'}}</p>
      </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'NotesCard',
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    parsetime (timestamp) {
      return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>

<style scoped>
 .size_inside{
   width: 350px;
   height: 350px;
   font-size: 13px;
 }
</style>
