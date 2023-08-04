<template>
  <div>
    <v-btn flat @click="setIsOpen()">Categoria</v-btn>
    <v-dialog v-model="isOpen" width="300">
      <v-card>
        <v-card-text>
          <v-form ref="form" class="px-5">
            <v-list-subheader>Cadastro Categoria</v-list-subheader>
            <v-text-field
              label="Nome da categoria"
              v-model="category_name"
              :rules="emptyFieldRules"
            ></v-text-field>

            <v-btn color="cyan-accent-4" @click="validate()">Salvar</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Diálogo para exibir mensagem de sucesso -->
    <v-dialog v-model="showSuccessDialog" max-width="300">
      <v-card>
        <v-card-title class="headline cyan">Sucesso!</v-card-title>
        <v-card-text>{{ successMessage }}</v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="closeSuccessDialog">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      category_name: "",
      isOpen: false,
      emptyFieldRules: [
          v => !!v || 'O campo deve ser preenchido',
      ],
      successMessage: "",
      showSuccessDialog: false,
    };
  },

  methods: {
    setIsOpen() {
      this.isOpen = this.isOpen ? false : true;
    },
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        const requestData = {
          category_name: this.category_name,
        };

        axios
          .post("http://localhost:4000/api/category", requestData)
          .then((response) => {
            this.successMessage = "Categoria cadastrada com sucesso!";
            this.showSuccessDialog = true;
          })
          .catch((error) => {
            console.error(error);
            alert("Sem conexão com o servidor");
          });
      }
    },

    closeSuccessDialog() {
      this.showSuccessDialog = false;
      // Atualiza a página após o usuário confirmar a mensagem de sucesso
      window.location.reload();
    },
  },
};
</script>

<style>
</style>