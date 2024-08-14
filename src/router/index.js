import { createRouter , createWebHistory } from "vue-router";


import Home from '../pages/Home.vue'
import NotFound from '../pages/404.vue'
import SingleMovie from '../pages/SingleMovie.vue'


const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/movie/:id',
        component: SingleMovie
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router