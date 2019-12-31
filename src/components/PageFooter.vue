<template>
  <div class="footer">
      <h4>Quick Menu</h4>
    <ul>
        <li>Home |</li>
        <li>Tuesday |</li>
        <li>Thursday |</li>
        <li>Vote</li>
    </ul>
    <a href="https://github.com/kevinrodrigues" target="_blank">
        &copy; Copyright {{ getCurrentYear }} Kevin Rodrigues - All Rights Reserved.
    </a>
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
</style>
