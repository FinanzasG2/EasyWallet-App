import './assets/main.css'
import Lara from '@primevue/themes/lara';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import {definePreset} from "@primevue/themes";
import 'primeicons/primeicons.css';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
import Checkbox from "primevue/checkbox";
import FileUpload from "primevue/fileupload";
import Message from "primevue/message";
import Card from "primevue/card";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Tag from 'primevue/tag';
import RadioButton from "primevue/radiobutton";
import Paginator from 'primevue/paginator';
import Toolbar from "primevue/toolbar";
import Avatar from "primevue/avatar";
import Textarea from "primevue/textarea";
import ProgressSpinner from "primevue/progressspinner";
import Select from "primevue/select";
import DatePicker from "primevue/datepicker";
import {Toast, ToastService} from "primevue";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const MyPreset = definePreset(Lara, {
    semantic: {
        primary: {
            50:  '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});
createApp(App)
    .use(PrimeVue, {
        ripple: true,
        theme: {
            preset: MyPreset,
            options: {
                prefix: 'p',
                darkModeSelector: '.dark',
            }
        },
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        },
        pt: {
            slider: {
                handle: { class: 'bg-primary text-primary-contrast' }
            }
        }
    })
    .use(router)
    .use(ToastService)
    .component('pv-calendar ', DatePicker)
    .component('pv-dropdown', Select)
    .component('pv-inputgroup', InputText)
    .component('pv-message', Message)
    .component('pv-file-upload', FileUpload)
    .component('pv-checkbox', Checkbox)
    .component('pv-toast', Toast)
    .component('pv-toolbar',Toolbar)
    .component('pv-avatar', Avatar)
    .component('pv-textarea', Textarea)
    .component('pv-input', InputText)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-data-table', DataTable)
    .component('pv-column', Column)
    .component('pv-dialog', Dialog)
    .component('pv-tag', Tag)
    .component('pv-radiobutton', RadioButton)
    .component('pv-paginator', Paginator)
    .component('pv-spinner', ProgressSpinner)
    .use(createPinia())
    .mount('#app')
