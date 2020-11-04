<template>
  <div class="user-details" style="text-align:left;">
  <user-form v-if="mode === 'edit'" :user="user"/>
  <div v-if="mode === 'view'">
    <p>username: {{user.userName}}</p>
    <p>role: {{user.role}}</p>
    <p>location: {{user.location}}</p>
    <p>views: {{user.views}}</p>
    <label>hobbies:
      <ul>
        <li v-for="(hobby, idx) of user.hobbies" :key="idx">
          {{hobby}}
        </li>
      </ul>
    </label>
    <div class="details-menu">
      <b-button-group>
        <b-button variant="light">
          {{this.user.views}}
          <b-icon icon="eye"></b-icon>
        </b-button>
        <b-button variant="light">
          <b-icon icon="pencil" @click="setMode({mode: 'edit'})"></b-icon>
        </b-button>
        <b-button variant="light" >
          <b-icon icon="trash" @click="deleteUser({user})"></b-icon>
        </b-button>
      </b-button-group>
    </div>
  </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import UserForm from './UserForm'
export default {
  name: 'UserListItem',
  props: {
    user: Object
  },
  components: {
    "user-form": UserForm
  },
  computed: {
    mode: function(){return this.getMode()}
  },
  methods: {
    ...mapMutations({
        deleteUser: 'REMOVE_USER',
        setMode: 'SET_MODE'
    }),
    ...mapGetters({
      getMode: 'getMode',
    }),
  }
}
</script>