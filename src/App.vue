<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/league-standings">Thursday's League Table</router-link> |
      <router-link to="/league-standings">Tuesday's League Table</router-link> |
      <a
        class="github-button"
        href="https://github.com/kevinrodrigues/thursday-night-football-league"
        data-icon="octicon-star"
        aria-label="Star kevinrodrigues/thursday-night-football-league on GitHub">
        Star
      </a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    const github = document.createElement('script');
    github.setAttribute('src', 'https://buttons.github.io/buttons.js');
    document.head.appendChild(github);
  },
};
</script>

<style>
body {
  background: url("./assets/bg2.jpg") no-repeat center center fixed;
  background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn {
  margin-top: 10px;
}
</style>
