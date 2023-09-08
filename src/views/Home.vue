<template>
  <v-app>
    <Navbar :currentRouteTitle="'Produtos'" />
    <v-main>
      <v-container>
        <template v-if="items.length === 0">
          <v-row>
            <v-col>
              <v-card class="empty-card" width="300px">
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
                  <v-card-title>
                    <div class="description-product-name">{{ item.product_name }}</div>
                  </v-card-title>
                </v-img>

                <v-card-subtitle class="mt-3">
                  {{ item.category_name }}
                </v-card-subtitle>

                <v-card-text>
                  <div>Preço: R$ {{ item.price }}</div>
                  <div class="description-text">{{ item.description }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    variant="outlined"
                    color="primary"
                    @click="openProductDialog(item)"
                  >
                    Ver mais
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    class="ml-auto"
                    @click="confirmDelete(item.productid)"
                    color="red"
                  >
                    Excluir
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-container>
    </v-main>

    <!-- Diálogo de confirmação -->
    <confirmation-dialog
      v-model="confirmDialog"
      :message="confirmMessage"
      @confirmed="deleteItem(itemToDelete.productid)"
      @canceled="cancelDelete"
    ></confirmation-dialog>

    <!-- Diálogo de detalhes do produto -->
    <product-details-dialog
      v-model="productDialogVisible"
      :product="selectedProduct"
      @closed="close"
    ></product-details-dialog>
  </v-app>
</template>

<script>
import { apiService } from "../api";
import Navbar from "../components/util/Navbar.vue";
import ConfirmationDialog from "../components/util/ConfirmationDialog.vue";
import ProductDetailsDialog from "../components/util/ProductDetailsDialog.vue";

export default {
  components: { Navbar, ConfirmationDialog, ProductDetailsDialog },
  data() {
    return {
      items: [],
      confirmDialog: false,
      itemToDelete: null,
      confirmMessage: "Tem certeza que deseja excluir este produto?",
      productDialogVisible: false,
      selectedProduct: null,
    };
  },

  mounted() {
    this.fetchItems();
  },

  methods: {
    async fetchItems() {
      try {
        const response = await apiService.fetchProducts();
        this.items = response.data;
      } catch (error) {
        console.error(error);
        alert("Sem conexão com o servidor");
      }
    },

    confirmDelete(productId) {
      this.itemToDelete = this.items.find(
        (item) => item.productid === productId
      );
      this.confirmDialog = true;
    },

    async deleteItem(productId) {
      try {
        await apiService.deleteProduct(productId);
        // Atualiza a lista de itens após a exclusão
        this.items = this.items.filter((item) => item.productid !== productId);
      } catch (error) {
        console.error(error);
        alert("Sem conexão com o servidor");
      } finally {
        this.confirmDialog = false;
        this.itemToDelete = null;
      }
    },

    cancelDelete() {
      this.confirmDialog = false;
      this.itemToDelete = null;
    },

    close() {
      this.productDialogVisible = false;
    },

    openProductDialog(product) {
      this.selectedProduct = product;
      this.productDialogVisible = true;
    },
  },
};
</script>

<style>
.empty-card {
  margin: 0 auto;
  text-align: center;
  margin-top: 200px;
}

.description-text {
  max-height: 1.2em; /* Defina a altura máxima desejada em em ou px */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.description-product-name {
  max-width: 12em; 
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
