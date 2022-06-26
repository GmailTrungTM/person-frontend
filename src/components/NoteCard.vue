<template>
    <div class="card size_inside">
      <div class="card-body">
        <h5 class="card-title">{{ note.title }}</h5>
        <p class="card-text">{{note.body}}</p>
      </div>
      <div class="card-footer">
        <p class="card-text">{{note.done ? 'erledigt' : 'nicht erledigt'}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NotesCard',
  props: {
    note: {
      type: Object,
      required: true
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
