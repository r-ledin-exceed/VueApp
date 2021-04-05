<template>
<v-card class="auth" id="auth">
    <v-card-title class="headline grey lighten-2">
        Registration
    </v-card-title>   

  <form>

    <div class="field">
      <v-label for="email">Enter e-mail</v-label>
      <input class="input" id="email" v-model="email" type="email" required>
    </div>

    <div class="field">
      <v-label for="password">Enter password</v-label>
      <input class="input" id="password" v-model="password" type="password" required>
    </div>

    <div>
      <v-label for="repeated_password">Repeat password</v-label>
      <input class="input"
        id="repeated_password"
        v-model="repeatedPassword"
        type="password"
        required
        ref="repeatedPasswordEl"
      >
    </div>

    <v-spacer></v-spacer>

    <v-btn class="logIn"
            @click="saveToLocalStorage">
            Sign up </v-btn>
    <v-btn  class="logIn"
            @click="toLogin">
            Back </v-btn>
  </form>

</v-card>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      email: '',
      password: '',
      repeatedPassword: '',
    };
  },

  watch: {
    repeatedPassword: "checkPasswordsEquality",
    password: "checkPasswordsEquality"
  },

  methods: {
    checkPasswordsEquality() {
      let pasLength = this.password.length;
      const { password, repeatedPassword } = this;
      const { repeatedPasswordEl } = this.$refs;
      if ((password !== repeatedPassword) || (pasLength < 8)) {
        repeatedPasswordEl.setCustomValidity(
          "Passwords mast be matched // Too short pass",
         );
      } else {
        repeatedPasswordEl.setCustomValidity("");
      }
    },
    saveToLocalStorage() {
        let pasLength = this.password.length;
        const { password, repeatedPassword, email}  = this;
            if ((password !== repeatedPassword) || (pasLength < 8) || (!email.includes('@')) ) {
                    alert("wrong data");
                    return;
            } else {
                const items = [
      {
      name:'3rd name', 
      id: uuidv4(), 
      coords: [-75.726634, 28.003391],
      url: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4"}, 
      {
      name:'2nd name', 
      id: uuidv4(), 
      coords: [62.726634, 12.003391],
      url: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4"
      },
      {
      name:'1st name', 
      id: uuidv4(), 
      coords: [0, 0], 
      url: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4"
    } 
    ]
            const user = { 
                items, 
                email, 
                password
            };
            localStorage.setItem('user', JSON.stringify(user))

            alert('confirmed, now log in')
        } 
    },
    toLogin() {
        let toLogPage = true;
        this.$emit('toLog', toLogPage);
        console.log(toLogPage);
    }
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
