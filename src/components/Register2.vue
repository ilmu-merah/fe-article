<template>
    <div class="register-container">
        <h2>Bergabung Bersama Kami</h2>
        <form @submit.prevent="handleRegister">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Masukkan email Anda..." required v-model="form.email">
            </div>
            <p v-if="messageError" class="text-error">{{ messageError }}</p>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Masukkan password..." required v-model="form.password" @input="checkInputPassword">
            </div>

            <div class="form-group">
                <label for="confirm-password">Konfirmasi Password</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="Konfirmasi password..." required v-model="form.confirmPassword" @input="checkInputPassword">
            </div>
            <p v-if="checkPassword" class="text-error">Password berbeda!</p>

            <button type="submit">
                {{ isLoading? 'Sedang masuk...' : 'Masuk' }}
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
        password: '',
        confirmPassword: ''
    })

    const isLoading = ref(false)
    const messageError = ref('')
    const checkPassword = ref(false)

    const checkInputPassword = () => {
        if(form.password == form.confirmPassword){
            checkPassword.value = false
        } else {
            checkPassword.value = true
        }
    }

    const handleRegister = async()=> {
        if(form.password == '' || checkPassword.value){
            return
        }

        isLoading.value = true
        messageError.value = ''

        try{
            await new Promise((resolve)=> setTimeout(resolve, 1500))
            if(form.email != 'user@gmail.com'){
                alert("Registrasi berhasil!")
                router.push("/")
            }else{
                throw new Error("Email sudah diginakan")
            }
        }catch(error){
            messageError.value = error.message
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