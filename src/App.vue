<template>
  <v-app>
    <v-navigation-drawer v-model="isDrowerOpen">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-group value="Produtos">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Produtos"></v-list-item>
          </template>
          <v-list-item>
            <PopupProduto />
          </v-list-item>
          <v-list-item>
            <v-btn variant="outline">Relatório</v-btn>
          </v-list-item>
        </v-list-group>

        <v-list-group value="Categoria">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Categoria"></v-list-item>
          </template>
          <v-list-item>
            <PopupCategoria />
          </v-list-item>
          <v-list-item>
            <v-btn variant="outline">Relatório</v-btn>
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
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img
                class="align-end text-white"
                src="https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp"
              >
                <v-card-title>Top 10 cidades</v-card-title>
              </v-img>

              <v-card-subtitle class="mt-3"> subtitulo </v-card-subtitle>

              <v-card-text>
                <div>cidades no centro</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn variant="outlined" color="primary">ver mais</v-btn>
                <v-btn class="ml-auto" variant="outlined" color="red">Excluir</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img
                class="align-end text-white"
                src="https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp"
              >
                <v-card-title>Top 10 cidades</v-card-title>
              </v-img>

              <v-card-subtitle class="mt-3"> subtitulo </v-card-subtitle>

              <v-card-text>
                <div>cidades no centro</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn>ver mais</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img
                class="align-end text-white"
                src="https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp"
              >
                <v-card-title>Top 10 cidades</v-card-title>
              </v-img>

              <v-card-subtitle class="mt-3"> subtitulo </v-card-subtitle>

              <v-card-text>
                <div>cidades no centro</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn>ver mais</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img
                class="align-end text-white"
                src="https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp"
              >
                <v-card-title>Top 10 cidades</v-card-title>
              </v-img>

              <v-card-subtitle class="mt-3"> subtitulo </v-card-subtitle>

              <v-card-text>
                <div>cidades no centro</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn>ver mais</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PopupProduto from "./components/produto/PopupProduto";
import PopupCategoria from "./components/categoria/PopupCategoria"
export default {
  components: {PopupProduto, PopupCategoria}
}
</script>

<script setup>
import { ref } from "vue";
import PopupCategoriaVue from './components/categoria/PopupCategoria.vue';

const isDrowerOpen = ref(false);
</script>


