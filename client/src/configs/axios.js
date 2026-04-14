import axios from 'axios'

const api=axios.create({
    baseURL:import.meta.VITE_BASEURL||'http://localhost:3000'
})

export default api;