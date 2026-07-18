<template>
    <div class="register-container">
        <h2>Bergabung Bersama Kami</h2>

        <form @submit.prevent="handleRegister">

            <div class="form-group">
                <label for="fullname">
                    Nama Lengkap
                </label>

                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Masukkan nama lengkap..."
                    required
                    v-model="form.fullname"
                >
            </div>


            <div class="form-group">
                <label for="username">
                    Username
                </label>

                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Masukkan username..."
                    required
                    v-model="form.username"
                >
            </div>


            <div class="form-group">
                <label for="email">
                    Email
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukkan email..."
                    required
                    v-model="form.email"
                >
            </div>


            <div class="form-group">
                <label for="password">
                    Password
                </label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Masukkan password..."
                    required
                    v-model="form.password"
                >
            </div>


            <div class="form-group">
                <label for="confirm-password">
                    Konfirmasi Password
                </label>

                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Konfirmasi password..."
                    required
                    v-model="form.confirmPassword"
                >
            </div>


            <p v-if="messageError" class="text-error">
                {{ messageError }}
            </p>


            <button
                type="submit"
                :disabled="isLoading"
            >
                {{ isLoading ? 'Mendaftarkan...' : 'Daftar' }}
            </button>

        </form>
    </div>
</template>


<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()


const form = reactive({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
})


const isLoading = ref(false)
const messageError = ref('')


const isPasswordDifferent = computed(() => {
    return form.password !== form.confirmPassword
})


const handleRegister = async () => {

    if (isPasswordDifferent.value) {
        messageError.value =
            'Password dan konfirmasi password harus sama.'

        return
    }

    isLoading.value = true
    messageError.value = ''


    try {

        const response = await fetch(
            'https://localhost:8080/api/auth/register',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    Fullname: form.fullname,
                    Username: form.username,
                    Email: form.email,
                    Password: form.password
                })
            }
        )


        if (!response.ok) {
            throw new Error('Registrasi gagal')
        }


        const data = await response.json()

        console.log('Response dari server:', data)


        alert('Registrasi berhasil!')


        router.push('/')


    } catch (error) {

        console.error(error)

        messageError.value =
            'Terjadi kesalahan saat melakukan registrasi.'

    } finally {

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