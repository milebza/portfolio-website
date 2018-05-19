<template>
  <div id="app">
    <Borders/>
    <div class="u-columns container">
      <Navigation/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import '@/styles/style.scss';
// @ is an alias to /src
import Borders from "@/components/Borders.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: 'App',
  components: {
    Borders,
    Navigation
  }
};
</script>
