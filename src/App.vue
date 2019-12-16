<template>
  <div id="app">
    <div id="nav">
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
        <li>
          <a
            class="github-button"
            href="https://github.com/kevinrodrigues/thursday-night-football-league"
            data-icon="octicon-star"
            aria-label="Star kevinrodrigues/thursday-night-football-league on GitHub">
            Star
            </a>
        </li>
      </ul>
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

body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  background-color: #f4f4f4;
}

a {
  color: #000;
}

/* header */

.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 3;
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
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

/* menu */

.menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.menu-icon .navicon:before,
.menu-icon .navicon:after {
  background: #333;
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

/* menu btn */

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

/* 48em = 768px */

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
}

</style>
