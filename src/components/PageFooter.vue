<template>
  <div class="footer">
    <h4>Quick Menu</h4>
    <ul>
        <li><router-link to="/">Home</router-link> |</li>
        <li><router-link :to="{
                name: 'league',
                params: {
                  day: 'tuesday'
                }
              }">Tuesday</router-link> |</li>
        <li><router-link :to="{
                name: 'league',
                params: {
                  day: 'thursday'
                }
              }">Thursday</router-link> |</li>
        <li><router-link to="/mom-votes/">Vote</router-link></li>
    </ul>
        <p class="copyright">&copy; Copyright {{ getCurrentYear }}
            <a href="https://github.com/kevinrodrigues" target="_blank">Kevin Rodrigues</a>
            - All Rights Reserved.</p>

    <a href="https://www.buymeacoffee.com/8BjFsLO" target="_blank" class="bmc"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee"></a>
  </div>
</template>

<script>
export default {
  computed: {
    getCurrentYear() {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
    background: #262626;
    padding: 20px;
    margin-top: 20px;
    color: #fff;
    text-align: right;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
}

.footer a {
    color: #777;
    font-size: 11px;
}

.footer h4 {
    text-align: left;
    margin-bottom: 5px;
    border-bottom: 1px solid #777;
}

.footer ul {
    text-align: left;
    padding: 0;
    margin: 0;
}

.footer li {
    list-style: none;
    list-style: none;
    display: inline-block;
    margin-right: 7px;
    font-size: 11px;
}

.footer li a {
    color: #fff;
    text-decoration: none;
}

.footer li a:hover,
.footer li a:focus {
    text-decoration: underline;
    color:#777;
}

.footer .copyright {
    font-size: 11px;
}

.footer .copyright a {
    color: #fff;
}

.footer .copyright a:hover,
.footer .copyright a:focus {
    color: #777;
}

.footer .bmc {
  overflow: hidden;
  width: 24px;
  height: auto;
  display: inline-flex;
  border-radius: 5px;
}

.footer .bmc img {
  width: 110px;
  height: 25px;
}
</style>
