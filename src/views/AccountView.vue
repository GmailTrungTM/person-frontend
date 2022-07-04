<template>
  <body>
  <h1>Your Notes</h1>
  <create-note-card></create-note-card>
  <note-card-list :notes="this.notes" @mutatenote="this.fetchnotes" @deletenote="this.deletenote"></note-card-list>
  </body>
</template>

<script>
import NoteCardList from '@/components/NoteCardList'
import CreateNoteCard from '@/components/NoteCreateCard'

export default {
  name: 'AccountView',
  components: {
    NoteCardList,
    CreateNoteCard
  },
  data () {
    return {
      notes: []
    }
  },
  mounted () {
    this.fetchnotes()
  },
  methods: {
    deletenote (id) {
      console.log(id)
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/notes'
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(`${endpoint}/${id}`, requestOptions)
        .then(this.fetchnotes)
    },
    fetchnotes () {
      this.notes = []
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/notes'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(note => {
          this.notes.push(note)
        }))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
