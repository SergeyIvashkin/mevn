import { getIntent } from "../services/payment.service";

export default {
  state: {
    cart: {},
    cartItems: [],
    productError: "",
  },
  mutations: {
    IN_CART(state, product) {
      let isProduct = state.cartItems.find((el) => el._id === product._id);
      if (isProduct) {
        state.cartItems = state.cartItems.filter(
          ({ _id }) => _id != product._id
        );
      } else {
        state.cartItems.push(product);
      }
    },
    SET_PRODUCT_ERROR(state, error) {
      state.productError = error;
    },
    CLEAR_CART(state) {
      state.cartItems = [];
    },
  },
  actions: {
    async HANDLE_BUY({ getters, commit }, form) {
      try {
        return await getIntent({ ...form, amount: getters.CART_TOTAL_PRICE });
      } catch (error) {
        commit("SET_PRODUCT_ERROR", error);
      }
    },
  },
  getters: {
    CART_TOTAL_PRICE: ({ cartItems }) =>
      cartItems.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0),
    CART: ({ cart }) => cart,
    CART_COUNT: ({ cartItems }) => cartItems.length,
    CART_ITEMS: ({ cartItems }) => cartItems,
  },
};
