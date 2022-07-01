<template>
    <div class="card size_inside">
      <div class="d-flex flex-row-reverse">
        <!-- Button trigger modal -->
        <button type="button" class="btn-close" aria-label="Close" data-bs-toggle="modal" data-bs-target="#closeButton">
        </button>

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
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="Submit" class="btn btn-primary" @click="deleteNote">Delete</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text">{{parsetime(note.createdtime)}}</p>
        <h5 class="card-title">{{ note.title }}</h5>
        <p class="card-text">{{note.body}}</p>
      </div>
      <form>
        <div class="card-footer">
          <button type="submit" class="btn btn-primary">check</button>
          <p class="card-text" id="font">{{note.done ? 'This Note Is Done' : 'This Note Is Not Done'}}</p>
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
      notes: [
      ]
    }
  },
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
  },
  deleteNote () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/notes'
    const requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then()
  }
}
</script>

<style scoped>
 .size_inside{
   width: 350px;
   height: 350px;
   font-size: 13px;
   margin: 20px 20px;
 }
 #font{
   padding-top: 5px;
   font-size: 16px;
 }
</style>
