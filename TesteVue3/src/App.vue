<template>
  <img alt="Vue logo" src="./assets/logo.png" style="padding-left:calc(50% - 100px); padding-right:calc(50% - 100px);">
  <OlaMundo />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OlaMundo from "@/components/OlaMundo.vue";

export default defineComponent({
  name: 'App',
  components: {
    OlaMundo
  }
});
</script>
