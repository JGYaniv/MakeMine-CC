<template>
  <div>
    <form @submit="checkForm" class="user-form">
      <label for="userName">
        <p>Username: </p>
        <input 
          id="userName" 
          v-model="userName" 
          type="text" 
          name="userName"
        />
      </label>
      <label for="role">
        <p>Role: </p>
        <select 
          id="role" 
          v-model="role" 
          name="role"
        >
          <option>lead</option>
          <option>senior</option>
          <option>junior</option>
          <option>intern</option>
        </select>
      </label>
      <label for="location">
        <p>Location: </p>
        <input 
          id="location" 
          v-model="location" 
          type="text" 
          name="location"
        />
      </label>
      <label for="hobbies">
        <p>Hobbies: </p>
        <input
          id="hobby"
          type="hobby"
          name="hobby"
          v-model="hobby"
        />
        <input
          type="submit"
          value="add"
          @click="addHobby"
        />
        <ul>
          <li v-for="hobby in hobbies" :key="hobby">
            {{hobby}}
          </li>
        </ul>
      </label>
      <input type="submit" value="create">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, idx) in errors" :key="idx">{{ error }}</li>
        </ul>
      </p>
    </form>
    <ul class="user-list">
      <form class="sort-by">
        <label for="sort">Sort by: 
          <select
            id="sorted" 
            v-model="sorted"
            name="sorted"
          >
            <option>Username (A-Z)</option>
            <option>Username (Z-A)</option>
            <option>Role (A-Z)</option>
          </select>
        </label>
      </form>
      <li v-for="(user, idx) in getUsers" 
        :key="idx" 
        @click="selected = idx" 
      >
        <user-details v-if="selected === idx" 
          v-bind:user="user" 
          class="active" 
        />
        <user-list-item v-else 
          v-bind:user="user"
          class="inactive"
        />
      </li>
    </ul>
  </div>
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
      hobby: "",
      selected: null,
      errors: [],
      sorted: null
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

      e.preventDefault();
      this.users.push(user)
      window.users = this.users
      return this.users
    },
    addHobby: function(e){
      const newHobby = this.hobby
      e.preventDefault()
      this.hobbies.push(newHobby)
      this.hobby = ""
    },
    checkForm: function(e){
      this.errors = []
      e.preventDefault()
      if (this.userName && !this.userNames.has(this.userName) && this.role && this.location) {
        this.addUser(e)
        this.userNames.add(this.userName)
        this.userName = ''
        this.role = ''
        this.location = ''
        this.hobbies = []
        window.usersNames = this.userNames
        return true
      }
      this.errors = []
      if (!this.userName) this.errors.push('username required')
      if (this.userNames.has(this.userName)) this.errors.push('username taken')
      if (!this.role) this.errors.push('role required')
      if (!this.location) this.errors.push('location required')
    }
  }
}
</script>