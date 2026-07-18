<script setup>
</script>

<template>
    <nav>
        <div class="logo"><router-link to="/">Medium</router-link></div>
        <ul>
            <li id="our-story">Our Story</li>
            <li id="write">Write</li>
            <li id="sign-in"><router-link to="/login">Sign in</router-link></li>
            <li id="get-started"><router-link to="/register">Get started</router-link></li>
        </ul>
    </nav>
    <hr>
</template>

<style>
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 80px;
    }

    nav #get-started a{
        color: white;
    }

    .logo{
        font-size: xx-large;
        font-weight: 700;
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
    }

    /* li{
        background-color: aqua;
    } */

    li:hover{
        cursor: pointer;
    }

    #get-started{
        color: white;
        background-color: black;
        padding: 10px 20px;
        border-radius: 50px;
    }

    hr{
        height: 1px;
        background-color: black;
    }
</style>