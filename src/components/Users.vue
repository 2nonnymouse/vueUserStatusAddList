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
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted" />
        <span :class="{ contacted: user.contacted }">
          {{ user.name }}: {{ user.email }}
        </span>
      </li>
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
    addUser: function(e) {
      //console.log("add");
      this.user.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      e.preventDefault();
    }
  }
};
</script>
}
<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>
