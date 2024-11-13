import {createRouter, createWebHistory} from "vue-router";
import LetterCreationPage from "@/management/pages/letter-creation.page.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //Autenthication

        //Letter
        { path: '/', redirect: '/register-letter'},
        {path: '/register-letter', name: 'Letter Creation Page', component: LetterCreationPage,meta: { requiresAuth: false } },

    ]
})

export default router;