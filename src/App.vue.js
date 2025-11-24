import { ref, nextTick } from 'vue';
const menuItems = ref([
    {
        title: '工具',
        isOpen: false,
        scrollHeight: 0,
        el: null,
        submenus: [{ name: '魔法', href: '/magic_internet' }]
    },
    {
        title: '杂项',
        isOpen: false,
        scrollHeight: 0,
        el: null,
        submenus: [{ name: '编程范式', href: '#' }]
    },
    {
        title: '算法',
        isOpen: false,
        scrollHeight: 0,
        el: null,
        submenus: []
    },
    {
        title: 'C++',
        isOpen: false,
        scrollHeight: 0,
        el: null,
        submenus: [
            { name: '如何从C++代码到可执行文件', href: 'compilationprocess.html' },
            { name: 'CMake教程', href: 'cmake.html' },
            { name: 'STL', href: 'stl.html' }
        ]
    },
    {
        title: 'Python',
        isOpen: false,
        scrollHeight: 0,
        el: null,
        submenus: [
            { name: '基础', href: 'python-basic.html' },
            { name: '进阶', href: 'python-advanced.html' }
        ]
    }
]);
// 正确的类型写法
const toggleMenu = async (item) => {
    item.isOpen = !item.isOpen;
    if (item.isOpen) {
        await nextTick();
        if (item.el) {
            item.scrollHeight = item.el.scrollHeight;
        }
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "home" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "box Personal-Information" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.img)({
    src: "./assets/tx.jpg",
    alt: "头像",
});
__VLS_asFunctionalElement(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "github" },
    href: "https://github.com/DreamDonghao",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsics.img)({
    ...{ style: "margin-bottom: 0" },
    src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    alt: "GitHub",
    ...{ class: "icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "box notice" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "box content" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "menu" },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
    // @ts-ignore
    [menuItems,];
    __VLS_asFunctionalElement(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (item.title),
    });
    __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleMenu(item);
                // @ts-ignore
                [toggleMenu,];
            } },
        ...{ class: "menu-title" },
        ...{ class: ({ open: item.isOpen }) },
    });
    (item.title);
    __VLS_asFunctionalElement(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "submenu" },
        ...{ style: ({ maxHeight: item.isOpen ? item.scrollHeight + 'px' : '0' }) },
        ref: ((el) => item.el = el),
    });
    for (const [sub] of __VLS_getVForSourceType((item.submenus))) {
        __VLS_asFunctionalElement(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (sub.name),
        });
        const __VLS_0 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
        // @ts-ignore
        RouterLink;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            to: (sub.href),
        }));
        const __VLS_2 = __VLS_1({
            to: (sub.href),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const { default: __VLS_5 } = __VLS_3.slots;
        (sub.name);
        var __VLS_3;
    }
}
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "box text" },
});
const __VLS_6 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
RouterView;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['home']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['box']} */ ;
/** @type {__VLS_StyleScopedClasses['Personal-Information']} */ ;
/** @type {__VLS_StyleScopedClasses['github']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['box']} */ ;
/** @type {__VLS_StyleScopedClasses['notice']} */ ;
/** @type {__VLS_StyleScopedClasses['box']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-title']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
/** @type {__VLS_StyleScopedClasses['submenu']} */ ;
/** @type {__VLS_StyleScopedClasses['box']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
