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
          <Filtro />
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar flat class="border-b">
    <v-app-bar-nav-icon
      @click="isDrowerOpen = !isDrowerOpen"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>Produtos</v-app-bar-title>
  </v-app-bar>
</template>

<script>
import PopupProduto from "../produto/PopupProduto.vue"
import PopupCategoria from "../categoria/PopupCategoria.vue";
import Filtro from "./Filtro.vue";

export default {
    components: { PopupProduto, PopupCategoria, Filtro},
    isDrowerOpen: false,
};
</script>

<script setup>
import { ref } from "vue";
import PopupProdutoVue from '../produto/PopupProduto.vue';

const isDrowerOpen = ref(false);
</script>

<style>
</style>