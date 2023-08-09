<template>
  <v-navigation-drawer v-model="isDrowerOpen">
    <v-list>
      <v-list-subheader>Menu</v-list-subheader>
      <v-list-group value="Cadastros">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Cadastros"></v-list-item>
        </template>
        <v-list-item>
          <PopupProduto />
        </v-list-item>
        <v-list-item>
          <PopupCategoria />
        </v-list-item>
      </v-list-group>

      <v-list-group value="Relatórios">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Relatórios"></v-list-item>
        </template>

        <v-list-item>
          <v-btn flat @click="clickFilter()">Produto</v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn flat @click="clickFilter()">Categoria</v-btn>
        </v-list-item>

      </v-list-group>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar flat class="border-b">
    <v-app-bar-nav-icon
      @click="isDrowerOpen = !isDrowerOpen"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>{{ currentRouteTitle }}</v-app-bar-title>
    <v-btn @click="clickHome()" variant="text" icon="mdi-home" color="primary"></v-btn>
    <v-btn @click="clickFinans()" variant="text" icon="mdi-cash-register" color="primary"></v-btn>
    <v-btn @click="clickStock()" variant="text" icon="mdi-archive" color="primary"></v-btn>
  </v-app-bar>
</template>

<script>
import PopupProduto from "../produto/PopupProduto.vue"
import PopupCategoria from "../categoria/PopupCategoria.vue";

export default {
    components: { PopupProduto, PopupCategoria},
   
    methods:{
      clickHome(){this.$router.push({name: 'home'});},
      clickFilter(){this.$router.push({name: 'filtro'});},
      clickFinans(){this.$router.push({name: 'financeiro'});},
      clickStock(){this.$router.push({name: 'estoque'});}
    },

    props:{
      currentRouteTitle: String,
    }
};


</script>

<script setup>
import { ref } from "vue";
import PopupProdutoVue from '../produto/PopupProduto.vue';

const isDrowerOpen = ref(false);
</script>

<style>
</style>