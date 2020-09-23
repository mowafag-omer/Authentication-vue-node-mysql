<template>
   <b-card no-body>
    <b-tabs card>
      <b-tab title="SignIn" active>
        <!-- <b-card-text>Tab contents 1</b-card-text> -->
        <SignInForm/>
      </b-tab>
      <b-tab title="SignUp">
        <!-- <b-card-text>Tab contents 2</b-card-text> -->
        <SignUpForm/>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

export default {
   name: 'FormHandler',
   components: {
    SignInForm,
    SignUpForm
  }
}
</script>

<style>

</style>