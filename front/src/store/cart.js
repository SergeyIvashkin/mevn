export default {
  state: {
    cart: {
      total: 0,
    },
    cartItems: [],
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
  },
  actions: {},
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
