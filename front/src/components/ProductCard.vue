<template>
  <div class="card">
    <div class="card__title">{{ title }} - {{ price }}</div>
    <div class="card__img">
      <img :src="imageUrl" alt="" />
    </div>
    <button
      @click="$emit('add_or_delete_cart')"
      class="btn-sm btn btn-primary"
      v-if="!inCart"
    >
      Добавить в корзину
    </button>
    <button
      @click="$emit('add_or_delete_cart')"
      class="btn-sm btn btn-danger"
      v-else
    >
      Удалить из корзину
    </button>
  </div>
</template>


<script>
export default {
  name: "ProductCard",
  props: {
    title: { typeof: String, default: "" },
    price: { typeof: String, default: 0 },
    imageUrl: { typeof: String, default: "" },
    inCart: { typeof: Boolean, default: false },
  },
};
</script>


<style lang="scss" scoped>
.card {
  width: 305px;
  height: 305px;
  border: 2px solid black;
  border-radius: 20px;
  text-align: center;

  &__img {
    width: 70%;
    height: auto;
    margin: auto;
  }
}
img {
  width: 100%;
}
.btn {
  width: 55%;
  border-radius: 5px;
  margin: auto;
}
</style>