<template>
  <div class="home">
    <home-view msg="Previous league standings"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeView from '@/components/HomeView.vue';

export default {
  name: 'home',
  components: {
    HomeView,
  },
};
</script>
