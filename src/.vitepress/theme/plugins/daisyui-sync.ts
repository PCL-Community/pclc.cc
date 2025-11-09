import { onMounted, watch } from "vue";
import { useData } from "vitepress";

export function useDaisyUISync() {
    const { isDark } = useData();

    onMounted(() => {
        // Apply initial theme
        document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "light");

        // Watch for theme changes
        watch(isDark, (newVal) => {
            document.documentElement.setAttribute("data-theme", newVal ? "dark" : "light");
        });
    });
}
