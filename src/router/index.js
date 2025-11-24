import { createRouter, createWebHashHistory } from 'vue-router';
import magic_internet from '@/components/magic_internet.vue';
const router = createRouter({
    history: createWebHashHistory(), // ⭐ 改这里
    routes: [
        { path: '/magic_internet', component: magic_internet }
    ]
});
export default router;
