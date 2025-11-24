import { createRouter, createWebHashHistory } from 'vue-router';
import magic_internet from '@/components/magic_internet.vue';
const routes = [
    { path: '/magic_internet', component: magic_internet },
];
export default createRouter({
    history: createWebHashHistory(),
    routes
});
