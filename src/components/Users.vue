<template>
  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name" />
      <br />
      <input type="text" v-model="newUser.email" placeholder="Enter Email" />
      <br />
      <input type="submit" value="submit" />
    </form>
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
      newUser: {},
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
  methods: {
    addUser: function() {
      console.log("add");
    }
  }
};
</script>

<style scoped></style>
