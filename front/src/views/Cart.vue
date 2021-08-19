<template>
  <div class="container">
    <template v-if="CART_ITEMS.length">
      <ul class="list-group text-center">
        <li
          class="list-group-item"
          v-for="{ title, price, _id } in CART_ITEMS"
          :key="_id"
        >
          {{ title }} - {{ price }}
        </li>
      </ul>
      <hr />
      <div>Quantity: {{ CART_COUNT }} Total: {{ CART_TOTAL_PRICE }}</div>
    </template>
    <div v-else>Your cart is empty please add items to it</div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapGetters(["CART_ITEMS", "CART_COUNT", "CART_TOTAL_PRICE"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
