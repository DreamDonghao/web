import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'

export default defineConfig({
    plugins: [
        {
            ...Markdown({}),   // ← 必须传入一个对象，即使是空的
            enforce: 'pre',
        },
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
    ],
    base: '/web/',
})
