// api.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api", 
});

export const apiService = {
  fetchCategories() {
    return instance.get("/category");
  },

  fetchProducts() {
    return instance.get("/products");
  },

  createProduct(data) {
    return instance.post("/products", data);
  },

  createCategory(data) {
    return instance.post("/category", data);
  },

  deleteProduct(productId) {
    return instance.delete(`/products/${productId}`);
  },
  
};
