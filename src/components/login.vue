<template>
<div>
  <header>
    <h1>Career Planning Help Application</h1>
  </header>

  <body>
    <form id="login">NUS User ID:
      <input type="text" name="Username">
      <br>Password:
      <input type="text" name="Password">
      <br>
      <router-link v-bind:to="'/profile'">Login</router-link>
      <router-link v-bind:to="'/profile'">Skip</router-link>
    </form>
</body>
</div>
</template>


<script>
import router from "../router";
</script>