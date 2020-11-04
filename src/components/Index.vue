<template>
<b-container class="user-form">
  <b-form @submit="addUser">
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
    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
  <b-form class="sort-by">
    <b-form-group label="Sort by:" for="sort">
      <b-form-select
        id="sorted" 
        v-model="sorted"
        name="sorted"
        :options="sortOptions"
      ></b-form-select>
    </b-form-group>
  </b-form>
  <b-list-group>
    <b-list-group-item v-for="(user, idx) in getUsers" 
      :key="idx" 
      @click="selected = idx" 
      :active="selected === idx"
    >
      <div style="text-align:end;">
        <b-icon :icon="selected === idx ? 'chevron-down' : 'chevron-right'" right/>
      </div>
      <user-details v-if="selected === idx" 
        v-bind:user="user" 
      />
      <user-list-item v-else 
        v-bind:user="user"
      />
    </b-list-group-item>
  </b-list-group>
</b-container>
</template>

<script>
import UserListItem from './UserListItem'
import UserDetails from './UserDetails'

export default {
  name: 'Index',
  data: function(){
    return {
      users: [], 
      userNames: new Set(),
      userName: null, 
      role: null, 
      location: null, 
      hobbies: [],
      selected: null,
      sorted: null,
      roles: ["senior", "junior", "intern", "lead"],
      sortOptions: ["Username (A-Z)","Username (Z-A)","Role (A-Z)"]
    }
  },
  computed: {
    getUsers: function(){
      let sortedUsers
      switch(this.sorted){
        case 'Username (A-Z)': 
          sortedUsers = this.users.slice().sort(
            (u1, u2) => (u1.userName.toLowerCase() < u2.userName.toLowerCase() ? -1 : 1));
          return sortedUsers
        case 'Username (Z-A)': 
          sortedUsers = this.users.slice().sort(
            (u1, u2) => u2.userName.toLowerCase() < u1.userName.toLowerCase() ? -1 : 1);
          return sortedUsers
        case 'Role (A-Z)': 
          sortedUsers = this.users.slice().sort(
            (u1, u2) => u1.role.toLowerCase() < u2.role.toLowerCase() ? -1 : 1);
          return sortedUsers
        default: return this.users;
      }
    }
  },
  components: {
    "user-list-item": UserListItem,
    "user-details": UserDetails
  },
  methods: {
    addUser: function(e){
      const user = {
        userName: this.userName, 
        role: this.role, 
        location: this.location, 
        hobbies: this.hobbies.slice()
      }
      
      this.userName = null
      this.role = null
      this.location = null
      this.hobbies = []

      e.preventDefault();
      this.users.push(user)
      window.users = this.users
      return this.users
    }
  }
}
</script>