<template>
    <div class="register-container">
        <h2>Bergabung Bersama Kami</h2>
        <form @submit.prevent="handleRegister">
            <div class="form-group">
                <label for="full-name">Nama Lengkap</label>
                <input type="text" name="full-name" id="full-name" placeholder="Masukkan nama lengkap..." required v-model="form.fullName">
            </div>

            <div class="form-group">
                <label for="user-name">Username</label>
                <input type="text" name="user-name" id="user-name" placeholder="Masukkan username..." required v-model="form.userName">
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Masukkan email Anda..." required v-model="form.email">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Masukkan password..." required v-model="form.password" @input="checkPasswordMatching">
            </div>

            <div class="form-group">
                <label for="confirm-password">Konfirmasi Password</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="Konfirmasi password..." required v-model="form.confirmPassword" @input="checkPasswordMatching">
            </div>
            <p v-if="!passwordMatching" class="text-error">Password berbeda!</p>
            <p v-if="messageError" class="text-error">{{ messageError }}</p>

            <button :disabled="!passwordMatching" type="submit">
                {{ isLoading? 'Sedang mendaftar...' : 'Daftar' }}
            </button>
        </form>
    </div>
</template>

<script setup>
    import {ref, reactive} from 'vue'
    import { useRouter } from 'vue-router';
import { errorMessages } from 'vue/compiler-sfc';

    const router = useRouter()

    const form = reactive({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const isLoading = ref(false)
    const messageError = ref('')
    const passwordMatching = ref(true)

    const checkPasswordMatching = ()=>{
        console.log("matching")
        if(form.password == form.confirmPassword){
            passwordMatching.value = true
        }else{
            passwordMatching.value = false
        }
    }

    const handleRegister = async()=> {
        if(!passwordMatching.value){
            return
        }
        isLoading.value = true
        messageError.value = ''
        try{
            const response = await fetch(
                'http://localhost:8080/api/auth/register',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        Fullname: form.fullName,
                        Username: form.userName,
                        Email: form.email,
                        Password: form.password
                    })
                }
            )

            if(!response.ok){
                throw new Error("Registrasi gagal!");
            }
            const data = await response.json()
            console.log('Response dari server:', data)
            alert('Registrasi berhasil!')
            router.push('/')

            // await new Promise((resolve)=> setTimeout(resolve, 1500)

            // if(form.userName == 'user'){
            //     throw new Error("Username sudah digunakan!");
            // }else if(form.email == 'user@gmail.com'){
            //     throw new Error("Email sudah terdaftar!");
            // }else{
            //     alert("Registrasi berhasil!")
            //     router.push('/')
            // }
        }catch(error){
            console.error(error)
            messageError.value = 'Terjadi kesalahan saat melakukan registrasi!'
        }finally{
            isLoading.value = false
        }
        
        
    }
</script>

<style scoped>
    .register-container{
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