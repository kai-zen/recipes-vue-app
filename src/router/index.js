import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/SingleFoodView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/low-calories',
        name: 'calories',
        component: () =>
            import ('../views/CaloriesView.vue')
    },
    {
        path: '/single-food/:id',
        name: 'details',
        component: DetailsView
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router