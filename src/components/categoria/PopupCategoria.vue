<template>
  <div>
    <v-btn flat @click="setIsOpen()">Cadastro</v-btn>
    <v-dialog v-model="isOpen" width="300">
      <v-card>
        <v-card-text>
          <v-form class="px-5">
            <v-text-field label="Nome da categoria" v-model="category_name"></v-text-field>

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
      category_name: "",
      isOpen: false,
    };
  },

  methods: {
    setIsOpen() {
      this.isOpen = this.isOpen ? false : true;
    },
    submit() {
      console.log(
        this.category_name
      );
    },
  },
};
</script>

<style>
</style>