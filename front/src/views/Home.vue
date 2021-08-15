<template>
  <div class="home">
    <ProductCard
      v-for="({ title, price, imageUrl }, key) in PRODUCTS"
      :key="key"
      :title="title"
      :price="price"
      :imageUrl="imageUrl"
    />
    <p>{{ PRODUCT_ERROR }}</p>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: { ProductCard },
  computed: {
    ...mapGetters(["PRODUCTS", "PRODUCT_ERROR"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS"]),
  },
  mounted() {
    this.GET_PRODUCTS();
  },
};
</script>
