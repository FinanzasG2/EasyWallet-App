import {createRouter, createWebHistory} from "vue-router";
import LetterCreationPage from "@/management/pages/letter-creation.page.vue";
import ReportPage from "@/report/pages/report.page.vue"; // Importa la página de reportes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        //Autenthication

        //Letter
        { path: '/', redirect: '/register-letter'},
        {path: '/register-letter', name: 'Letter Creation Page', component: LetterCreationPage,meta: { requiresAuth: false } },
        {path: '/report-page', name: 'report.page', component: ReportPage ,meta: { requiresAuth: false } },
    ]
})

export default router;