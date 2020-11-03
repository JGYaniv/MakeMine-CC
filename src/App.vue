<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpg">
    <home />
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    home: Index
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  background-color: lightgoldenrodyellow;
  padding: 1rem;
}

.inactive{ 
  cursor: pointer; 
  padding: .5rem;
} 

.inactive:hover { 
  background: rgb(245, 245, 245);
}

.user-form {
  width: 20rem;
  margin: 0 auto;
  text-align: left; 
  margin-bottom: 2rem;
}

label {
  display: block;
}

input[value="create"]{
  padding: .5rem 1.5rem;
  font-size: 1rem;
}

input[value="add"]{
  margin-left: 1rem;
}

li {
  list-style: none;
}

p {
  margin: 0;
  padding: 0;
}

.user-list {
    position: relative;
    text-align: left;
    width: 25rem;
    margin: 0 auto;
    padding: 0;
}

.sort-by{
  position: absolute; 
  right: 0;
  text-align: right;
}

.user-form p {
  width: 6rem;
  display: inline-block;
}

img {
  width: 50px;
}
</style>
