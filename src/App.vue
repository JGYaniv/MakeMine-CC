<template>
  <div id="app">
    <br/>
    <b-img class="logo" alt="Vue logo" src="https://i.imgur.com/Qe5HUht.jpg" center></b-img>
    <index />
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    index: Index
  },
}
</script>

<style>

.logo { 
  width: 50px; 
  margin: 0 auto; 
}

.user-form {
  max-width: 600px;
}

.sort-by{
  text-align: right;
  width: 10rem;
  margin: 0 0 0 auto;
}

.chevron {
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 20px;
}

</style>
