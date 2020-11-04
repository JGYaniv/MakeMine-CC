<template>
  <div  class="user-list-item" >
    <p>username: {{user.userName}}</p>
    <p>role: {{user.role}}</p>
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