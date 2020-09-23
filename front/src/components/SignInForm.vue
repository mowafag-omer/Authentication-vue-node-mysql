<template>
  <b-form @submit.prevent="signIn" class="text-left">
    <h6 class="text-danger">{{msg}}</h6>
    <b-form-group class="w-50 text-left" id="input-group-1" label="Email address:" label-for="in-1"
      description="We'll never share your email with anyone else.">
      <b-form-input id="in-1" v-model="email" type="email" required placeholder="Enter email"></b-form-input>
    </b-form-group>

    <b-form-group class="w-50 text-left" id="input-group-2" label="Password:" label-for="in-2">
      <b-form-input id="in-2" v-model="pass" type="password" placeholder="Enter your password" required></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="success">Sign-In</b-button>
  </b-form>  
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignInForm',
  data() {
    return {
      email: '',
      pass: '',
      msg: ''
    }
  },
  methods:{
    signIn: async function() {
       try { 
        const sign = await axios.post('http://localhost:3000/sign-in', {
          email: this.email,
          pass: this.pass
        })
        const result = await sign
        console.log(result.data.token)
        this.$store.dispatch('setToken', result.data.token)
        console.log(this.$store.state.token);
        this.$router.push('dashboard')
      } 
      catch(err) {
        console.log(err.response.data) 
        this.msg = err.response.data
        this.email = ''
        this.pass = ''
      }
    }
  }
}
</script>

<style>

</style>