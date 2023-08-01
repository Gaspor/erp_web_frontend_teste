<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <template v-if="items.length === 0">
          <v-row>
            <v-col>
              <v-card class="mt-15 ml-15" width="300px">
                <v-card-text>Não há produtos cadastrados.</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>
        <template v-else>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-for="item in items"
              :key="item.productid"
            >
              <v-card>
                <v-img class="align-end" :src="item.image">
                  <v-card-title>{{ item.product_name }}</v-card-title>
                </v-img>

                <v-card-subtitle class="mt-3">{{
                  item.category
                }}</v-card-subtitle>

                <v-card-text>
                  <div>Preço: R$ {{ item.price }}</div>
                  <div>Descrição: {{ item.description }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn variant="outlined" color="primary">ver mais</v-btn>
                  <v-btn
                    class="ml-auto"
                    variant="outlined"
                    color="red"
                    @click="confirmDelete(item.productid)"
                    >Excluir</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-container>
    </v-main>

    <!-- Diálogo de confirmação -->
    <v-dialog v-model="confirmDialog" max-width="300">
      <v-card>
        <v-card-title class="headline red">Confirmação</v-card-title>
        <v-card-text>Tem certeza que deseja excluir este produto?</v-card-text>
        <v-card-actions>
          <v-btn color="red" @click="deleteItem(itemToDelete.productid)">Sim</v-btn>
          <v-btn color="primary" @click="cancelDelete">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import axios from "axios";
import Navbar from "../components/util/Navbar.vue"

export default {
  components: { Navbar },
  data() {
    return {
      items: [],
      confirmDialog: false,
      itemToDelete: null,
    };
  },

  mounted() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      axios
        .get("http://localhost:4000/api/products")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error(error);
          alert('Sem conexão com o servidor');
        });
    },

    confirmDelete(productId) {
      this.itemToDelete = this.items.find((item) => item.productid === productId);
      this.confirmDialog = true;
    },

    deleteItem(productId) {
      axios
        .delete(`http://localhost:4000/api/products/${productId}`)
        .then((response) => {
          // Atualiza a lista de itens após a exclusão
          this.items = this.items.filter((item) => item.productid !== productId);
        })
        .catch((error) => {
          console.error(error);
          alert('Sem conexão com o servidor');
        })
        .finally(() => {
          this.confirmDialog = false;
          this.itemToDelete = null;
        });
    },

    cancelDelete() {
      this.confirmDialog = false;
      this.itemToDelete = null;
    },
  },
};
</script>

<style>
</style>