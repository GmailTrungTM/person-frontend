<template>
  <div class="card-group">
    <div class="col size_outside" v-for="note in notes" :key="note.id">
      <note-card :note="note"></note-card>
    </div>
  </div>
</template>

<script>
import NoteCard from '@/components/NoteCard'
export default {
  name: 'NoteCardList',
  components: {
    NoteCard
  },
  props: {
    notes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .size_outside{
    width: 100%;
    padding: 20px 20px;
    margin: 15px 15px;
  }
</style>
