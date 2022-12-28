<template>
    <h1>Olá Mundo!</h1>
    <h2>Primeiroi projeto com VUE 3!!!</h2>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "OlaMundo"
    })

</script>

<style>
    body {
        background-color: black;
    }
    h1, h2 {
        color: white;
        text-align: center;
    }
</style>