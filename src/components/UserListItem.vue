<template>
  <div>
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