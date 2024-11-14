import {createRouter, createWebHistory} from "vue-router";
import LetterCreationPage from "@/management/pages/letter-creation.page.vue";
import LetterListPage from "@/management/pages/letter-list.page.vue";
import LoginComponent from "@/auth/pages/log-in.component.vue";
import ReportPage from "@/report/pages/report.page.vue"; // Importa la página de reportes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        //Autenthication

        //Letter
        { path: '/', redirect: '/login'},
        {path: '/login', name: 'Log In Component', component: LoginComponent,meta: { requiresAuth: false } },
        {path: '/register-letter', name: 'Letter Creation Page', component: LetterCreationPage,meta: { requiresAuth: false } },
        {path: '/report-page', name: 'report.page', component: ReportPage ,meta: { requiresAuth: false } },
        {path: '/letter-list', name: 'Letter List Page', component: LetterListPage ,meta: { requiresAuth: false } },
    ]
})

export default router;