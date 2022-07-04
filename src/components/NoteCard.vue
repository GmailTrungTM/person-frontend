<template>
  <div class="card size_inside">
    <div class="d-flex flex-row-reverse">
      <!-- Button trigger modal -->
      <button @click="ondeleteclick" type="button" class="btn-close" aria-label="Close" data-bs-toggle="modal"
              data-bs-target="#closeButton">
      </button>
    </div>
    <div class="card-body">
      <p class="card-text">{{ parsetime(note.createdtime) }}</p>
      <button @click="toggleEdit">Edit</button>
      <div>
        <h5 v-if="!editing" class="card-title">{{ note.title }}</h5>
        <input type="text" v-if="editing" v-model="updatedNote.title">
      </div>
      <div>
        <p v-if="!editing" class="card-text">{{ note.body }}</p>
        <input type="text" v-if="editing" v-model="updatedNote.body">
      </div>
      <p class="card-text">{{ note.id }}</p>
    </div>
    <form>
      <div class="card-footer">
        <button @click="onCheckClick" type="submit" class="btn btn-primary">check</button>
        <p class="card-text" id="font">{{ note.done ? 'This Note Is Done' : 'This Note Is Not Done' }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'NotesCard',
  data () {
    return {
      notes: [],
      editing: false,
      updatedNote: { ...this.note }
    }
  },
  emits: ['delete', 'mutatenote'],
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    parsetime (timestamp) {
      return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
    },
    ondeleteclick () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/notes'
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(`${endpoint}/${this.note.id}`, requestOptions)
        .then(this.fetchnotes)
      this.$emit('delete', this.note.id)
    },
    updateNote () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/notes'
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      console.log(this.note)
      const payload = JSON.stringify(this.updatedNote)

      const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: payload,
        redirect: 'follow'
      }

      fetch(`${endpoint}/${this.note.id}`, requestOptions)
        .then(() => this.$emit('mutatenote'))
        .catch(error => console.log('error', error))
    },
    onCheckClick () {
      this.updatedNote.done = true
      this.updateNote()
    },
    async toggleEdit () {
      if (this.editing) {
        this.editing = false
        this.updateNote()
      } else {
        this.editing = true
      }
    }
  }
}
</script>

<style scoped>
.size_inside {
  width: 350px;
  height: 350px;
  font-size: 13px;
  margin: 20px 20px;
}

#font {
  padding-top: 5px;
  font-size: 16px;
}
</style>
