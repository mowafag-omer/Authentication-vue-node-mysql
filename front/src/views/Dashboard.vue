<template>
   <b-jumbotron header="This Dashboard page">
    <h3>Welcome to you connected user !</h3>
    <hr class="my-4">
    <b-button @click="signOut" variant="danger">Sign-out</b-button>
  </b-jumbotron>
</template>

<script>
export default {
name: 'Dashboard',
methods: {
  signOut: function(){
    this.$store.dispatch('destroyToken')
    this.$router.push('Home')
  }
}
}
</script>

<style>

</style>