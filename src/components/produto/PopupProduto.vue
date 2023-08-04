<template>
  <div>
    <v-btn flat @click="setIsOpen()">Produto</v-btn>
    <v-dialog v-model="isOpen" width="auto">
      <v-card>
        <v-card-text>
          <v-form ref="form" class="px-3">
            <v-list-subheader>Cadastro Produto</v-list-subheader>
            <v-text-field
              label="Nome"
              :rules="emptyFieldRules"
              v-model="product_name"
            ></v-text-field>
            <v-text-field
              label="Preço"
              type="number"
              :rules="emptyFieldRules"
              v-model="price"
            ></v-text-field>
            <v-select
              label="Categoria"
              :rules="emptyFieldRules"
              v-model="category"
              :items="categories"
              item-title="category_name"
              item-value="categoryid"
            ></v-select>
            <v-textarea
              label="Descrição"
              :rules="emptyFieldRules"
              v-model="description"
            ></v-textarea>

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
      product_name: "",
      price: "",
      category: "",
      description: "",
      isOpen: false,
      emptyFieldRules: [
          v => !!v || 'O campo deve ser preenchido',
      ],
      successMessage: "",
      showSuccessDialog: false,
    };
  },

  mounted() {
    this.fetchItems();
  },

  methods: {
    setIsOpen() {
      this.isOpen = !this.isOpen;
    },

    async validate() {
      const { valid } = await this.$refs.form.validate()
        if (valid){
        const requestData = {
          product_name: this.product_name,
          price: this.price,
          category: this.category,
          description: this.description,
        };

      axios
        .post("http://localhost:4000/api/products", requestData)
        .then((response) => {
          this.successMessage = "Produto cadastrado com sucesso!";
          this.showSuccessDialog = true;
        })
        .catch((error) => {
          console.error(error);
          alert('Sem conexão com o servidor');
        });
        }
    },

    fetchItems() {
      axios
        .get("http://localhost:4000/api/category")
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
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
