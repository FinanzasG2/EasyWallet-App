import {createRouter, createWebHistory} from "vue-router";
import LetterCreationPage from "@/management/pages/letter-creation.page.vue";
import LetterListPage from "@/management/pages/letter-list.page.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //Autenthication

        //Letter
        { path: '/', redirect: '/list-letter'},
        {path: '/register-letter', name: 'Letter Creation Page', component: LetterCreationPage,meta: { requiresAuth: false } },
        {path: '/list-letter', name: 'Letter List Page', component: LetterListPage,meta: { requiresAuth: false } },

    ]
})

export default router;