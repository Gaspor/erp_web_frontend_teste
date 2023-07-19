<template>
  <div>
    <v-btn flat @click="setIsOpen()">Produto</v-btn>
    <v-dialog v-model="isOpen" width="auto">
      <v-card>
        <v-card-text>
          <v-form class="px-3">
            <v-list-subheader>Cadastro Produto</v-list-subheader>
            <v-text-field label="Nome" :rules="emptyFieldRules" v-model="product_name"></v-text-field>
            <v-text-field label="Preço" type="number" :rules="emptyFieldRules" v-model="price"></v-text-field>
            <v-select
              label="Categoria"
              :rules="emptyFieldRules"
              v-model="category"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
            ></v-select>
            <v-textarea label="Descrição" :rules="emptyFieldRules" v-model="description"></v-textarea>

            <v-btn color="cyan-accent-4" @click="submit()">Salvar</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product_name: "",
      price: "",
      category: "",
      description: "",
      isOpen: false,
      emptyFieldRules: [
        value => {
          if (value) return true

          return 'O campo deve ser preenchido.'
        }
      ],
    };
  },

  methods: {
    setIsOpen() {
      this.isOpen = this.isOpen ? false : true;
    },
    submit() {
      console.log(
        this.product_name,
        this.price,
        this.category,
        this.description
      );
    },
  },
};
</script>

<style>
</style>