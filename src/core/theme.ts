import { useTheme } from '@/stores/theme';

export function loadTheme() {
    const themeStore = useTheme();
    let theme = localStorage.getItem('theme');

    if (theme == null) {
        localStorage.setItem('theme', themeStore.value);
        theme = themeStore.value;
    }

    if (theme == 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    themeStore.value = theme;
}
