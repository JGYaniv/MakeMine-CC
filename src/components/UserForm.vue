<template>
<b-container class="user-form">
  <b-form @submit="handleSubmit">
    <b-form-group label="Username:" label-for="userName">
      <b-form-input
        id="userName" 
        v-model="userName" 
        placeholder="..."
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Role:" label-for="role">
      <b-form-select
        id="role" 
        v-model="role" 
        :options="roles"
        required
      >
        <template #first> 
          <b-form-select-option :value="null" disabled>-- select --</b-form-select-option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-form-group label="Location:" label-for="location">
      <b-form-input
        id="location" 
        v-model="location" 
        placeholder="..."
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Hobbies" label-for="hobbies">
      <b-form-tags v-model="hobbies" 
        remove-on-delete placeholder="..." 
        separator=" ,;" 
        tag-variant="primary" 
        tag-pills
        size="lg"
      ></b-form-tags>
    </b-form-group>
    <b-button type="submit" variant="primary">{{this.user ? 'Update' : 'Create'}}</b-button>
  </b-form>
</b-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Index',
  data: function () {
    return {
      userName: this.user && this.user.userName || null,
      role: this.user && this.user.role || null,
      location: this.user && this.user.location || null,
      hobbies: this.user && this.user.hobbies || [],
      roles: ['senior', 'junior', 'intern', 'lead'],
    }
  },
  props: ['user'],
  methods: {
    ...mapMutations({
        postUser: 'ADD_USER',
        updateUser: 'UPDATE_USER',
        setMode: 'SET_MODE'
    }),
    addUser: function(user) {
      this.postUser({user})
      this.userName = null
      this.role = null
      this.location = null
      this.hobbies = []
    },
    handleSubmit(e){
      e.preventDefault()
      const user = {
        userName: this.userName, 
        role: this.role, 
        location: this.location, 
        hobbies: this.hobbies.slice(),
        views: 0
      }

      if (this.user) {
        user.id = this.user.id
        this.updateUser({user})
        this.setMode({mode: 'view'})
      } else {
        this.addUser(user)
      }
    }

  }
}
</script>