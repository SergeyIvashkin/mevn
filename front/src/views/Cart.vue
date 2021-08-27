<template>
  <div class="container cart">
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

      <UserForm v-if="!paymentIntent" @onFormSubmit="handleGetPayment" />

      <div v-if="paymentIntent" class="payCard">
        <card
          class="stripe-card"
          :class="{ complete }"
          stripe="pk_test_51JQAaHChqZJrMNXYcTVgG6WGVmdw6c7br1ZcLwXAoGomrIS1NKhhlMkNgFQyBhw0QvcguyswaDumkcCI2kDPbLVy008eEMOr52"
          @change="complete = $event.complete"
        />
        <button
          class="pay-with-stripe btn btn-success"
          @click="pay"
          :disabled="!complete"
        >
          Pay with credit card
        </button>
      </div>

      <div>Quantity: {{ CART_COUNT }} Total: {{ CART_TOTAL_PRICE }}</div>
    </template>

    <div v-else>Your cart is empty please add items to it</div>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { Card, handleCardPayment } from "vue-stripe-elements-plus";
import UserForm from "../components/UserForm";

export default {
  name: "Cart",
  components: { Card, UserForm },

  data() {
    return {
      paymentIntent: "",
      complete: false,
    };
  },
  methods: {
    ...mapActions(["HANDLE_BUY"]),
    ...mapMutations(["CLEAR_CART"]),
    async handleGetPayment(form) {
      try {
        const intent = await this.HANDLE_BUY({
          ...form,
          products: this.CART_ITEMS,
        });
        console.log(intent);
        this.paymentIntent = intent.paymentIntent.client_secret;
      } catch (err) {
        console.log(err);
      }
    },
    async pay() {
      try {
        await handleCardPayment(this.paymentIntent);
        this.CLEAR_CART();
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapGetters(["CART_ITEMS", "CART_COUNT", "CART_TOTAL_PRICE"]),
  },
};
</script>

<style lang="scss" scoped>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
.cart {
  text-align: center;
}
.payCard {
  display: flex;
  flex-direction: row;
}
</style>
