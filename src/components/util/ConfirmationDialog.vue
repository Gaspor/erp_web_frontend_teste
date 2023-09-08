<template>
  <v-dialog v-model="dialogVisible" max-width="300">
    <v-card>
      <v-card-title class="headline red">Confirmação</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-btn color="red" @click="confirm">Sim</v-btn>
        <v-btn color="primary" @click="cancel">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    message: String,
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
    confirm() {
      this.$emit("input", false); // Emita o evento personalizado para atualizar o valor
      this.$emit("confirmed");
    
    },
    cancel() {
      this.$emit("input", false); // Emita o evento personalizado para atualizar o valor
      this.$emit("canceled");
      
    },
  },
};
</script>
