<script setup></script>

<template>
    <div class="container-hero">
        <div class="hero">
            <span style="font-size: 112px; font-weight: 600;">Human<br>Stories and Ideas</span>
            <div style="font-size: x-large; font-weight: 400;">A place to read, write, and deepen your understanding</div>
            <button>Start reading</button>
        </div>
        <div class="hero-img">
            <!-- <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt=""> -->
        </div>
    </div>
</template>

<style>
    .container-hero{
        display: flex;
        align-items: center;
    }

    .hero{
        flex-grow: 1;
        padding-left: 80px;
    }

    .hero button{
        font-size: x-large;
        font-weight: 400;
        color: white;
        background-color: black;
        padding: 10px 20px;
        margin: 16px 0;
        border-radius: 50px;
    }

    .hero button:hover{
        cursor: pointer;
    }

    .hero-img{
        background-image: url(https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png);
        background-size: cover;
        width: 30%;
        height: 100%;
    }
</style>