<template>
  <div>
    <v-btn flat @click="setIsOpen()">Cadastro</v-btn>
    <v-dialog v-model="isOpen" width="auto">
      <v-card>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Nome" v-model="product_name"></v-text-field>
            <v-text-field type="number" label="Preço" v-model="price"></v-text-field>
            <v-select
              label="Categoria"
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
            <v-textarea label="Descrição" v-model="description"></v-textarea>

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