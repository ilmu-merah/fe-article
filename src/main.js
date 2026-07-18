import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 1. Impor router yang sudah kamu perbaiki tadi

const app = createApp(App)

app.use(router) // 2. BARIS INI WAJIB ADA: Mendaftarkan router ke aplikasi Vue

app.mount('#app') // 3. Proses mount harus dilakukan PALING AKHIR setelah .use()