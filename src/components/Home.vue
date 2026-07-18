<script setup>
    import Navbar from './Navbar.vue';
    import Hero from './Hero.vue';
    import Footer from './Footer.vue';
</script>

<template>
    <header>
        <Navbar></Navbar>
        <Hero></Hero>
        <Footer></Footer>
    </header>
</template>

<style>
    header{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .container-hero{
        /* background-color: aqua; */
        flex-grow: 1;
    }
</style>