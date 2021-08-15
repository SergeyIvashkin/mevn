<template>
  <div>
    <div class="card">
      <div class="card__title">{{ title }} - {{ price }}</div>
      <div class="card__img">
        <img :src="imageUrl" alt="" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProductCard",
  props: {
    title: { typeof: String, default: "" },
    price: { typeof: String, default: 0 },
    imageUrl: { typeof: String, default: "" },
  },
};
</script>