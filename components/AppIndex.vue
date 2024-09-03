<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useMainStore, } from '~/stores/mainStore';
const { locale } = useI18n()
const mainStore = useMainStore();

const selected_language = computed(() => mainStore.language);
const darkmode = computed(() => mainStore.darkMode);

const setDarkMode = (darkmode) => {
  mainStore.darkMode = darkmode;
  localStorage.setItem('darkMode', darkmode.toString());
  mainStore.applyDarkMode();
};

const setLanguage = (language) => {
  mainStore.language = language;
  localStorage.setItem('language', language);
};

onMounted(() => {
  window.scrollTo(0, 0);
  const savedDarkMode = localStorage.getItem('darkMode');
  const savedLanguage = localStorage.getItem('language');
  mainStore.darkMode = savedDarkMode === 'true';
  mainStore.language = savedLanguage || 'en';
  mainStore.applyDarkMode();
});
</script>
<template>
  <div class="w-screen h-screen bg-zinc-50 dark:bg-dark-background grid place-items-center">
    <div class="max-w-screen-lg size-full grid place-items-center">
<!--      <div class="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden">-->
<!--        <NuxtImg class="w-full h-full blur-3xl scale-125" src="/settings_background.jpg"></NuxtImg>-->
<!--      </div>-->
      <div class="w-full p-5">
      <div class="bg-white border-[1px] border-zinc-200 rounded-2xl text-[#212529]">
        <h1 class="py-2 text-2xl text-center font-[400]">Site settings</h1>
        <div class="border-t-[1px] border-zinc-200">
          <h1 class="px-5 py-2 text-xl">Select Theme</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 pb-5">
            <div class="group">
              <div @click="setDarkMode(false)" :class="{ 'bg-red-500 dark:bg-red-500': darkmode === false }" class="bg-zinc-50 border-[1px] border-zinc-200 py-5 rounded-lg grid place-items-center size-full group-hover:drop-shadow-lg transition-all duration-300">
                <h1 class="">Light Theme</h1>
              </div>
            </div>
            <div class="group">
              <div @click="setDarkMode(true)" :class="{ 'bg-red-500 dark:bg-red-500': darkmode === true }" class="bg-zinc-50 border-[1px] border-zinc-200 py-5 rounded-lg grid place-items-center size-full group-hover:drop-shadow-lg transition-all duration-300">
                <h1 class="">Dark Theme</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t-[1px] border-zinc-200">
          <h1 class="px-5 py-2 text-xl">Select Language</h1>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 pb-5">
            <div class="group">
              <div  :class="{ 'bg-red-500 dark:bg-red-500': selected_language === 'en' }" class="bg-zinc-50 border-[1px] border-zinc-200 py-5 rounded-lg grid place-items-center size-full group-hover:drop-shadow-lg transition-all duration-300">
                <h1 class="">English (Default)</h1>
              </div>
            </div>
            <div class="group">
              <div  :class="{ 'bg-red-500 dark:bg-red-500': selected_language === 'nl' }" class="bg-zinc-50 border-[1px] border-zinc-200 py-5 rounded-lg grid place-items-center size-full group-hover:drop-shadow-lg transition-all duration-300">
                <h1 class="">Dutch</h1>
              </div>
            </div>
            <div class=" group">
              <div :class="{ 'bg-red-500 dark:bg-red-500': selected_language === 'tr' }" class="bg-zinc-50 border-[1px] border-zinc-200 py-5 rounded-lg grid place-items-center size-full group-hover:drop-shadow-lg transition-all duration-300">
                <h1 class="">Turkish</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 border-t-[1px] border-zinc-200 p-5">
          <div class="bg-action dark:bg-action w-full py-2 text-2xl text-center rounded-lg">
          <NuxtLink to="/home" >Proceed To Website</NuxtLink>
          </div>
          <select v-model="locale">
            <option value="en">EN</option>
            <option value="nl">NL</option>
            <option value="tr">TR</option>
          </select>
          <p>{{ $t('welcome') }}</p>
        </div>
<!--        dont need but nice to keep-->
<!--        <div class="border-t-[1px] border-zinc-200">-->
<!--          <h1 class="px-5 py-2 text-xl">Do You Accept cookies</h1>-->
<!--          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 pb-5">-->
<!--            <div class="group">-->
<!--              <div class="bg-zinc-50 border-[1px] border-zinc-200 py-5 rounded-lg grid place-items-center size-full group-hover:drop-shadow-lg transition-all duration-300">-->
<!--                <h1 class="">Yes</h1>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="group">-->
<!--              <div class="bg-zinc-50 border-[1px] border-zinc-200 py-5 rounded-lg grid place-items-center size-full group-hover:drop-shadow-lg transition-all duration-300">-->
<!--                <h1 class="">No</h1>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      </div>
    </div>
  </div>
</template>