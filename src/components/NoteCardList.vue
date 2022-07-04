<template>
  <div class="card-group">
    <div class="col size_outside" v-for="note in notes" :key="note.id">
      <note-card :note="note" @mutatenote="() => this.$emit('mutatenote')" @delete="(id) => this.targetNote = id"></note-card>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="closeButton" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you really want to delete this Note?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="this.targetNote = -1">
              Close
            </button>
            <button type="Submit" class="btn btn-primary" @click="onDeleteClick">Delete</button>
          </div>
        </form>
      </div>
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
  emits: ['deletenote', 'mutatenote'],
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      targetNote: {
        type: Number
      }
    }
  },
  methods: {
    onDeleteClick () {
      this.$emit('deletenote', this.targetNote)
      this.targetNote = -1
    }
  }
}
</script>

<style scoped>
.size_outside {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
