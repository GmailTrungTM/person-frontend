<template>
  <div class="container-fluid">
    <div class="card-group">
      <div class="col" v-for="note in notes" :key="note.id">
        <div class="card">
          <!--      <img src="..." class="card-img-top" alt="...">-->
          <div class="card-body">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="card-text">{{note.body}}</p>
          </div>
          <div class="card-footer">
            <p class="card-text">{{note.done ? 'erledigt' : 'nicht erledigt'}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotesCard',
  props: {
    notes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
