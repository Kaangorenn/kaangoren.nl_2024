import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            darkMode: false,
            language: "en",
            accept_cookies: "no"
        }
    },
    actions: {
        applyDarkMode() {
            if (this.darkMode) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        },
        setLanguage(lang) {
            this.language = lang;
        },
    }
})