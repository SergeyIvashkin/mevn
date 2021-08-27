<template>
  <div class="home">
    <ProductCard
      v-for="product in PRODUCTS"
      :key="product._id"
      :title="product.title"
      :price="product.price"
      :imageUrl="product.imageUrl"
      :inCart="cartItemsIds.includes(product._id)"
      @add_or_delete_cart="addOrDeleteCart(product)"
    />
    <p>{{ PRODUCT_ERROR }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Home",
  components: { ProductCard: () => import("../components/ProductCard") },
  computed: {
    ...mapGetters(["PRODUCTS", "PRODUCT_ERROR", "CART_ITEMS"]),
    cartItemsIds() {
      return this.CART_ITEMS.map((el) => el._id);
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS"]),
    ...mapMutations({ addOrDeleteCart: "IN_CART" }),
  },
  mounted() {
    this.GET_PRODUCTS();
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-around;
  padding: 90px;
}
</style>