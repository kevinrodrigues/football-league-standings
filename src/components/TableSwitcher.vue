<template>
  <div class="table-switcher">
    <input type="checkbox" id="switch"/>
    <label for="switch">
      <span class="ave">Ave</span>
      <span class="total">Total</span>
    </label>
  </div>
</template>

<style scoped>
.table-switcher {
  position: relative;
}

.table-switcher span {
  position: absolute;
  top: 9px;
  z-index: 9;
}

.table-switcher .ave {
  left: 19px;
}

.table-switcher .total {
  right: 14px;
}

.table-switcher input[type=checkbox] {
  height: 0;
  width: 0;
  visibility: hidden;
}

.table-switcher label {
  cursor: pointer;
  width: 120px;
  height: 40px;
  background-color: #42b983;
  display: block;
  border-radius: 100px;
  position: relative;
}

.table-switcher label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 60px;
  height: 30px;
  background-color: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

.table-switcher input:checked + label .ave,
.table-switcher input:not(:checked) + label .total {
  color: #fff;
}

.table-switcher input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

.table-switcher label:active:after {
  width: 30px;
}
</style>
