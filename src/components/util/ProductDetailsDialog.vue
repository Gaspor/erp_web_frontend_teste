<template>
  <v-dialog v-model="dialogVisible" max-width="500">
    <v-card>
      <v-card-title>{{ product.product_name }}</v-card-title>
      <v-card-subtitle>{{ product.category_name }}</v-card-subtitle>
      <v-card-text>
        <div>Preço: R$ {{ product.price }}</div>
        <div>Descrição: {{ product.description }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="closeDialog">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    product: Object,
    value: Boolean,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  watch: {
    value(newValue) {
      this.dialogVisible = newValue;
    },
  },
  methods: {
    closeDialog() {
      this.$emit("input", false); // Emita o evento personalizado para fechar o diálogo
      this.$emit("closed");
    },
  },
};
</script>
