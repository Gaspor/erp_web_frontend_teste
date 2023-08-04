<template>
  <VoltaPaginaAnterior />
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Categoria</th>
          <th class="text-left">Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.productid">
          <td>{{ item.product_name }}</td>
          <td>{{ item.category_name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import axios from "axios";
import VoltaPaginaAnterior from "../components/util/VoltaPaginaAnterior.vue";

export default {
  components: { VoltaPaginaAnterior },

  data() {
    return {
      items: [],
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
          alert("Sem conexão com o servidor");
        });
    },
  },
};
</script>

<style>
</style>
