import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
    plugins: [vue()],
    // https://dreamdonghao.github.io/web/stl.html
    base: '/web/', // ⭐ 必须
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
});
