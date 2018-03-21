<template>
  <div>



  </div>
</template>
<script>
import AuthenticationService from "@services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
       await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>

</style>
