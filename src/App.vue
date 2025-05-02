<template>
  <Navbar />
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script setup>

import Home from './views/Home.vue';
import Navbar from './components/Navbar.vue';



</script>
