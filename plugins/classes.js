// plugins/classes.js
import { computed } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
    // Define your computed classes
    const component = computed(() => "mb-4 text-2xl tracking-tight font-medium text-primary-50");
    const componentHeaderTitle = computed(() => "mb-4 text-2xl tracking-tight font-medium text-primary-50");

    // Inject them into the app
    nuxtApp.provide('component', component);
    nuxtApp.provide('componentHeaderTitle', componentHeaderTitle);
});
