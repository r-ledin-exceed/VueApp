<template>
  <div id="auth">
  <LogIn v-show="counter"
  @authDone = "authCompleted"
  @toReg = "toRegLog"/>
  <Register v-show="!counter"
  @toLog = "toLogReg"/>
  </div>
</template>

<script>
import LogIn from "@/components/toAuth/LogIn"
import Register from "@/components/toAuth/Register"

export default {

  data() {
    return {
      counter: true,
    };
  },

  components: {
    LogIn,
    Register,
  },

  methods: {
    authCompleted(authDone) {
      console.log(authDone)
      this.$emit('authDone', authDone)
      
    }, 
    toLogReg(toLogPage) {
      this.counter = toLogPage;
    },
    toRegLog(toRegPage) {
      this.counter = toRegPage;
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
