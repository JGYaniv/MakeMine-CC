<template>
<b-container class="index">
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
      :variant="selected === idx ? 'primary' : ''"
      style="text-align:right"
    >
      <b-button @click="select(user, idx)" variant='bright'>
        <b-icon :icon="selected === idx ? 'chevron-down' : 'chevron-right'" />
      </b-button>
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
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Index',
  data: function(){
    return {
      users: [], 
      sorted: null,
      sortOptions: ["Username (A-Z)","Username (Z-A)","Role (A-Z)"],
    }
  },
  computed: {
    getUsers: function(){
      let sortedUsers
      switch(this.sorted){
        case 'Username (A-Z)': 
          sortedUsers = this.fetchUsers().slice().sort(
            (u1, u2) => (u1.userName.toLowerCase() < u2.userName.toLowerCase() ? -1 : 1));
          return sortedUsers
        case 'Username (Z-A)': 
          sortedUsers = this.fetchUsers().slice().sort(
            (u1, u2) => u2.userName.toLowerCase() < u1.userName.toLowerCase() ? -1 : 1);
          return sortedUsers
        case 'Role (A-Z)': 
          sortedUsers = this.fetchUsers().slice().sort(
            (u1, u2) => u1.role.toLowerCase() < u2.role.toLowerCase() ? -1 : 1);
          return sortedUsers
        default: return this.fetchUsers();
      }
    },
    selected:  function(){return this.getSelected()}
  },
  components: {
    "user-list-item": UserListItem,
    "user-details": UserDetails
  },
  mounted: function(){
    this.$nextTick(function(){
      this.users = this.fetchUsers()
    })
  },
  methods: {
    ...mapMutations({
      updateUser: 'UPDATE_USER',
      setSelected: 'SET_SELECTED'
    }),
    ...mapGetters({
      fetchUsers: 'getUsers',
      getMode: 'getMode',
      getSelected: 'getSelected',
    }),
    addView: function(user){
      this.updateUser({
        user: Object.assign({}, user, {views: user.views+1})
      })
    },
    select: function(user, idx){  
      if (this.selected === idx){
        this.setSelected({selected: null})
      } else {
        this.setSelected({selected: idx})
        this.addView(user)
      }
    }
  }
}
</script>