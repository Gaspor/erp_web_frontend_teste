<template>
    <v-btn class="mt-2 ml-2" color="primary" @click="click">
      <v-icon icon="mdi-arrow-left" />
    </v-btn>
</template>

<script>
export default {
  methods: {
    click() {
      this.$router.back();
    },
  },
};
</script>
