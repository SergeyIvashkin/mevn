<template>
  <div>
    <header class="header">
      <div class="header__left">LOGO</div>
      <div class="header__right">
        <ul class="nav">
          <li class="nav__link" v-for="{ id, title } in categories" :key="id">
            <router-link :to="`categories/${id}`"> {{ title }}</router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>


<script>
export default {
  name: "Header",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>