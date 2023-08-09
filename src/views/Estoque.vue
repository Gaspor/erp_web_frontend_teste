<template>
  <v-app>
    <Navbar :currentRouteTitle="'Estoque'" />
  </v-app>
</template>

<script>
import Navbar from "../components/util/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
</style>