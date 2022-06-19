<template>
  <h1>Deine Notizen</h1>
  <div class="container-fluid">
    <div class="card-group">
      <div class="col" v-for="note in notes" :key="note.id">
        <div class="card">
          <!--      <img src="..." class="card-img-top" alt="...">-->
                  <div class="card-body">
                    <h5 class="card-title">{{ note.title }}</h5>
                    <p class="card-text">{{note.body}}</p>
                    <p class="card-text">{{note.done ? 'erledigt' : 'nicht erledigt'}}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountView',
  data () {
    return {
      notes: [

      ]
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/notes'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(note => this.notes.push(note)))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
