<template>
  <div class="home">
    <home-view/>
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
