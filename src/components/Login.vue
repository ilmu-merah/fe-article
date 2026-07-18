<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Masukkan email Anda..." required v-model="form.email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="enail" id="password" placeholder="Masukkan password Anda..." required v-model="form.password">
            </div>
            <p v-if="messageError" class="text-error">{{ messageError }}</p>

            <button type="submit" :disabled="isLoading">
                {{ isLoading? "Sedang masuk..." : "Masuk" }}
            </button>
        </form>
    </div>
</template>

<script setup>
    import {ref, reactive} from 'vue'
    import { useRouter } from 'vue-router';

    const router = useRouter()

    const form = reactive({
        email: '',
        password: ''
    })

    const isLoading = ref(false)
    const messageError = ref('')

    const handleLogin = async ()=> {
        isLoading.value = true
        messageError.value = ''
        try{
            await new Promise((resolve)=> setTimeout(resolve, 1500))

            if(form.email == 'user@gmail.com' && form.password == 123456){
                alert("Login berhasil!")
                router.push("/")
            }else{
                throw new Error("Email atau password salah!")
            }
        }catch (error){
            messageError.value = error.message
        }finally{
            isLoading.value = false
        }
    }
</script>

<style scoped>
    .login-container{
        /* background-color: aquamarine; */
        max-width: 400px;
        margin: 50px auto;
        padding: 32px;
        border: 1px solid darkgrey;
        border-radius: 10px;
        box-shadow: 0 4px 6px lightgray;
    }
    h2{
        text-align: center;
        margin-bottom: 8px;
    }
    label{
        /* background-color: chartreuse; */
        margin-top: 24px;
        display: block;
        font-size:large;
        font-weight: bold;
    }
    input{
        width: 100%;
        padding: 8px;
        border: 1px solid darkgray;
        border-radius: 4px;
        box-sizing: border-box;
    }
    button{
        background-color: #42b983;
        color: white;
        font-size: large;
        font-weight: bold;
        width: 100%;
        padding: 8px;
        margin: 32px auto;
        border-radius: 4px;
        cursor: pointer;
    }
    .text-error{
        color: red;
    }
</style>