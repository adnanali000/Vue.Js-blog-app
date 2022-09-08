<template>
  <div class="add-blog">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="text" v-model="username" required />
      <label>Password:</label>
      <input type="password" v-model="password" required />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleClick: function() {
      console.log(this.username, " ", this.password);
    },
    handleSubmit: function() {
      if (this.username == "ad@gmail.com" && this.password == "hello") {
        localStorage.setItem("at", "true");
        this.$router.push("/add");
      } else {
        alert("Wrong input");
      }
    }
  },
  created: function() {
    console.log("created");
  },
  mounted: function() {
    const auth = localStorage.getItem("at");
    if (auth) {
      this.$router.push("/add");
    }
  },
  updated: function() {
    console.log("updated");
  }
};
</script>

<style scoped>
.add-blog {
  width: 50%;
  height: 300px;
  margin: 100px auto;
  padding: 20px 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
input[type="password"] {
  display: block;
  width: 80%;
  padding: 10px;
}
</style>
