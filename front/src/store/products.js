import { getProduct, getProducts } from "../services/products.service";

export default {
  state: {
    product: {},
    products: [],
    productError: null,
  },
  mutations: {
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT_ERROR(state, error) {
      state.productError = error;
    },
  },
  actions: {
    async GET_PRODUCT({ commit }, id) {
      try {
        const product = await getProduct(id);
        commit("SET_PRODUCT", product);
      } catch (error) {
        commit("SET_PRODUCT_ERROR", error);
      }
    },
    async GET_PRODUCTS({ commit }) {
      try {
        const products = await getProducts();
        console.log(products);
        commit("SET_PRODUCTS", products);
      } catch (error) {
        commit("SET_PRODUCT_ERROR", error);
      }
    },
  },
  getters: {
    PRODUCT: ({ product }) => product,
    PRODUCTS: ({ products }) => products,
    PRODUCT_ERROR: ({ productError }) => productError,
  },
};
