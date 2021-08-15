<template>
  <div id="app">
    <Header :categories="categories" />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layouts/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      categories: [
        { title: "PS4", id: 1 },
        { title: "XBOX", id: 2 },
        { title: "DENDY", id: 3 },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
