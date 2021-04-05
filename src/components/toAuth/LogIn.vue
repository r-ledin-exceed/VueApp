<template>
<v-card class="auth login" id="auth">
    <v-card-title class="headline grey lighten-2">
        Log In
    </v-card-title>       

  <form>
    <div class="field">
      <v-label for="email">Enter e-mail</v-label>
      <input class="input" id="email1" v-model="email" type="email" required>
    </div>
    <div class="field">
      <v-label for="password">Enter password</v-label>
      <input class="input" id="password1" v-model="password" type="password" required>
    </div>
    <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn  class="logIn"
            @click="checkEquality">
            Login</v-btn>
    <v-btn  class="logIn"
            @click="toRegister">            
            Register</v-btn>
    </v-card-actions>
  </form>

</v-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    checkEquality() {
        const user = JSON.parse(localStorage.getItem("user"));
      if ((this.password === user.password) && (this.email === user.email)) {
          alert("ok!")
          this.$emit('authDone', false);
        const array = user.items
         array.forEach(item => {
          let arr = item.coords,
              namemarker = item.name,
              urlUser = item.url;
          this.$store.dispatch('increment', {arr, namemarker, urlUser})
          });

      } else {
          alert("incorrect email or password!");
          this.$emit('authDone', true);
      }
    },
    toRegister() {
        let toRegPage = false;
        this.$emit('toReg', toRegPage);
        console.log(toRegPage);
    },
    // beforeMount: function setItems() {
    //     console.log(localStorage)
    //   this.email = localStorage.email;
    //   this.password = localStorage.password;
      
    // }
  },
};
</script>

<style>
.auth {
    width:300px;
    padding: 20px;
}

.input {
    border: 1px black solid;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 5px;
}

.input:focus {
    outline: none;
}

.active {
display: none;
}

.logIn {
margin: 10px;
}
</style>
