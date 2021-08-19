<template>
  <div>
    <header class="header">
      <div class="header__left">
        <router-link to="/">LOGO</router-link>
      </div>
      <div class="header__right">
        <ul class="nav">
          <li class="nav__link" v-for="{ id, title } in categories" :key="id">
            <router-link to="`categories/${id}`"> {{ title }}</router-link>
          </li>
        </ul>
      </div>
      <div class="cart">
        <router-link to="/cart">Cart</router-link>
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
  background-color: ghostwhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  &__right {
    width: 305px;
  }
}

.nav {
  display: flex;
  justify-content: space-between;

  li {
    list-style-type: none;
  }
}
a {
  text-decoration: none;
}
</style>