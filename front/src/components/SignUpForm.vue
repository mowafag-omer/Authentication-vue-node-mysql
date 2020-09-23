<template>
  <b-form @submit.prevent="signUp" class="text-left">
    <h6 v-show="showMsg" class="text-success">{{msg}}</h6>
    <b-form-group class="w-50 text-left" id="input-group-1" label="Name:" label-for="input-1">
      <b-form-input id="input-1" v-model="name" type="text" placeholder="Enter Name"  required></b-form-input>
    </b-form-group>

    <b-form-group class="w-50 text-left" id="input-group-2" label="Email address:" label-for="input-2"
      description="We'll never share your email with anyone else.">
      <b-form-input id="input-2" v-model="email" type="email" placeholder="Enter email" required></b-form-input>
    </b-form-group>

    <b-form-group class="w-50 text-left" id="input-group-3" label="Password:" label-for="input-3">
      <b-form-input id="input-3" v-model="pass" type="password" placeholder="Enter your password" required></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="success">Sign-Up</b-button>
  </b-form>  
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUpForm',
  data() {
    return {
      name: '',
      email: '',
      pass: '',
      msg: 'You have been registred go Sign-in now !',
      showMsg: false
    }
  },
  methods:{
    signUp: async function() {
      try { 
        await axios.post('http://localhost:3000/sign-up', {
          name: this.name,
          email: this.email,
          pass: this.pass
        })
        // this.$alert(`the todo ${this.task} has been added successfully !`)
        // await this.$fire({title: "New todo", text: `${this.task} has been added to your list !`,type: "success",timer: 2500})
        this.name = ''
        this.email = ''
        this.pass = ''
        this.showMsg = true
        setTimeout(() => this.showMsg = false, 6000)
      } 
      catch(err) { console.error(err) }
    }
  }
}
</script>

<style>

</style>