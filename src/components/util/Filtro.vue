<template>
  <VoltaPaginaAnterior />
  <div class="mt-15">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-card>
            <v-card-text>
              <v-list-subheader>Filtros</v-list-subheader>
              <v-select
                label="Campo"
                v-model="field"
                :items="['Descrição', 'Código']"
              ></v-select>
              <v-select
                label="Condição"
                v-model="condition"
                :items="['Que contém', 'Igual a', 'Preenchido']"
              ></v-select>

              <v-text-field label="Conteúdo" v-model="content"></v-text-field>
              <v-btn class="mt-10" color="cyan-accent-4" @click="submit()">Executar</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import VoltaPaginaAnterior from "./VoltaPaginaAnterior.vue";

export default {
  components: { VoltaPaginaAnterior },
  data() {
    return {
      field: "",
      condition: "",
      content: "",
      isOpen: false,
    };
  },

  methods: {
    submit() {
      console.log(this.field, this.condition, this.content);
      this.$router.push("/relatorio");
    },
  },
};
</script>

<style>
</style>