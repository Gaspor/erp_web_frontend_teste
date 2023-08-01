<template>
  <div>
    <v-btn flat @click="setIsOpen()">Produto</v-btn>
    <v-dialog v-model="isOpen" width="300">
      <v-card>
        <v-card-text>
          <v-form class="px-5">
            <v-list-subheader>Filtros</v-list-subheader>

            <v-select
              label="Campo"
              v-model="field"
              :items="[
                'Descrição',
                'Código'
              ]"
            ></v-select>
            <v-select
              label="Condição"
              v-model="condition"
              :items="[
                'Que contém',
                'Igual a',
                'Preenchido'
              ]"
            ></v-select>

            <v-text-field label="Conteúdo" v-model="content"></v-text-field>

            <v-btn class="mt-10" color="cyan-accent-4" @click="submit()">Executar</v-btn>
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
      field: "",
      condition: "",
      content: "",
      isOpen: false,
    };
  },

  methods: {
    setIsOpen() {
      this.isOpen = this.isOpen ? false : true;
    },
    submit() {
      console.log(
        this.field,
        this.condition,
        this.content,
      );

       this.$router.push('/teste');
    },
  },
};
</script>

<style>
</style>