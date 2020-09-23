<template>
  <div class="home">
    <b-jumbotron header="Connexion Interface">
    <p>Below the formulary for signUp or signIn our magnificient application</p>
    <hr class="my-4">
    <FormHandler />
  </b-jumbotron>
  </div>
</template>

<script>
import FormHandler from '../components/FormHandler'

export default {
  name: 'Home',
  components: {
    FormHandler
  }
}
</script>
