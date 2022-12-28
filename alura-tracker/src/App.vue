<template>
  <main class="columns is-gapless is-multiline">
    <div class="columns is-one-quarter">
      <BarraLateral />
    </div>
    <div class="columns is-three-quarter">

    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
    name: "App",
    components: {
       BarraLateral 
    }
});
</script>

<style>

</style>
