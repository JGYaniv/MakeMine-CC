<template>
  <div>
    <p>username: {{user.userName}}</p>
    <p>role: {{user.role}}</p>
    <p>location: {{user.location}}</p>
    <label>hobbies:
      <ul>
        <li v-for="(hobby, idx) of user.hobbies" :key="idx">
          - {{hobby}}
        </li>
      </ul>
    </label>
  </div>
</template>

<script>
export default {
    name: 'UserListItem',
    props: {
      user: Object
    },
}
</script>