<template>
  <div id="app">
    <div class="github-cta">
      <a
        class="github-button"
        href="https://github.com/kevinrodrigues/thursday-night-football-league"
        data-icon="octicon-star"
        aria-label="Star kevinrodrigues/thursday-night-football-league on GitHub">
        Star
    </a>
    </div>
    <div
      v-observe-visibility="visibilityChanged"
      id="nav" >
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link :to="{
              name: 'league',
              params: {
                day: 'tuesday'
              }
            }">Tuesday</router-link></li>
        <li><router-link :to="{
              name: 'league',
              params: {
                day: 'thursday'
              }
            }">Thursday</router-link></li>
        <li><router-link to="/mom-votes/">Vote</router-link></li>
      </ul>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  mounted() {
    const github = document.createElement('script');
    github.setAttribute('src', 'https://buttons.github.io/buttons.js');
    document.head.appendChild(github);
  },

  methods: {
    ...mapActions(['setHeaderVisibility']),

    visibilityChanged(isVisible) {
      this.setHeaderVisibility(isVisible);
    },
  },
};
</script>

<style>

body {
  background: url("./assets/bg2.jpg") no-repeat center center fixed;
  background-size: cover;
  margin: 0;
}

h1 {
  color: #fff;
  background-color: rgba(0,0,0,0.2);
  margin: 0;
  padding: 12px;
  font-size: 16px;
  transition: all 0.5s ease-out;
  position: relative;
  z-index: 999;
}

h1.stickyHeader {
  position: sticky;
  top: 0;
  background-color: #000;
  font-size: 12px;
  box-shadow: 1px 1px 4px 4px #333;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: rgba(0, 0, 0, 0.3);
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
  position: absolute;
}

.github-cta {
  position: absolute;
  left: 10px;
  top: 20px;
}

.github-cta a {
  color: #fff;
}

a {
  color: #000;
}

.menu {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}

.menu li a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
  text-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
}

.menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

.menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.menu-icon .navicon {
  background: #fff;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.menu-icon .navicon:before,
.menu-icon .navicon:after {
  background: #fff;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.menu-icon .navicon:before {
  top: 5px;
}

.menu-icon .navicon:after {
  top: -5px;
}

.menu-btn {
  display: none;
}

.menu-btn:checked ~ .menu {
  max-height: 240px;
}

.menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

@media (min-width: 48em) {
  .menu li {
    float: left;
  }
  .menu li a {
    padding: 20px 30px;
  }
  .menu {
    clear: none;
    max-height: none;
  }
  .menu-icon {
    display: none;
  }

  .github-cta {
    right: 10px;
    left: auto;
  }
}
</style>
