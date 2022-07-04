<template>
  <body>
      <div class="home">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
        <i class="fas fa-book-open logo"></i>
        <HelloWorld></HelloWorld>
        <router-link class="btn" to="/account"><i class="fas fa-chevron-right"></i>To Your Notes</router-link>
      </div>
  </body>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  /*Logo*/
  .fa-book-open {
    font-size: 120px;
    color: #0d6efd;
  }
  body{
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 20px;
  }
</style>
