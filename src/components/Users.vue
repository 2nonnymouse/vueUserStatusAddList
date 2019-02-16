<template>
  <div class="users">
    <h1>hello user</h1>
    <ul>
      <li v-for="user in users">{{ user.name }}: {{ user.email }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "users",
  data() {
    return {
      users: [
        {
          name: "John Doe",
          email: "jd@mail.com",
          contacred: false
        },
        {
          name: "blay Ooe",
          email: "ccds@mail.com",
          contacred: false
        },
        {
          name: "ay oe",
          email: "ds@mail.com",
          contacred: false
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped></style>
