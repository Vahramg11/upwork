<template>
    <div class="dark:bg-gray-700 bg-gray-200 pt-12 grid grid-cols-3 gap-10">
        <!-- Card start -->
        <div v-for="elm, i in devs" :key="i"
            class="w-full mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div class="border-b px-4 pb-6">
                <div class="text-center my-4">
                    <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                        :src="elm.photo" alt="">
                    <div class="py-2">
                        <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">{{ elm.first_name }} {{
                            elm.last_name }}</h3>
                        <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                            <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1 fill-[#8e8e8e] hover:fill-[#6366f1]"
                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                                <path
                                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z">
                                </path>

                            </svg>

                            {{ elm.email }}
                        </div>
                        <br>

                        <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                            <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1 fill-[#8e8e8e] hover:fill-[#10b981]"
                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                                <path
                                    d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z">
                                </path>

                            </svg>
                            {{ elm.salary }}$
                        </div>
                    </div>
                </div>
                <div class="flex gap-2 px-2">
                    <button
                        class="flex-1 rounded-lg bg-[#2563eb]  text-white dark:text-white antialiased font-bold hover:bg-[#1d4ed8] px-4 py-2">
                        Delete
                    </button>
                    <button
                        class=" flex-1 rounded-lg bg-[#22c55e]  text-white dark:text-white antialiased font-bold hover:bg-[#16a34a] px-4 py-2">
                        info
                    </button>

                </div>
            </div>
            <div class="px-4 py-4">


            </div>
        </div>
        <!-- Card end -->
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from "vuex";
const store = useStore()
const devs = computed(() => store.getters["admin/get_developers"])
</script>