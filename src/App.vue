<template>
  <div id="app">
    <br/>
    <b-img class="logo" alt="Vue logo" src="https://i.imgur.com/Qe5HUht.jpg" center></b-img>
    <userForm />
    <index />
  </div>
</template>

<script>
import UserForm from './components/UserForm'
import Index from './components/Index'

export default {
  name: 'App',
  components: {
    userForm: UserForm,
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

.sort-by {
  text-align: right;
  width: 10rem;
  margin: 0 0 0 auto;
}

.user-details {
  position: relative;
  text-align: left;
}

.details-menu {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.user-list-item{
  text-align: left;
}

.index {
  max-width: 600px;
}
</style>
