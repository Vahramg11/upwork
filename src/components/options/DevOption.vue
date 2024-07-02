<template>
    <div class="bg-[#eaf6f6] pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
    <!-- Card start -->
    <div v-for="dev in devs" :key="dev.id" class="bg-[#fcfefe] rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <!-- Image and Name -->
      <div class="relative">
        <img v-if="dev.photo" class="object-cover h-64 w-full rounded-t-lg" :src="'http://127.0.0.1:8000' + dev.photo" alt="Profile Image">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent py-2 px-4 text-white">
          <h3 class="font-bold text-xl">{{ dev.first_name }} {{ dev.last_name }}</h3>
        </div>
      </div>
      
      <!-- Details -->
      <div class="px-4 py-4">
        <!-- Email -->
        <div class="flex items-center mb-2">
          <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <p class="text-gray-700 dark:text-gray-300">{{ dev.email }}</p>
        </div>
        
        <!-- Salary -->
        <div class="flex items-center mb-2" v-if="dev.salary">
          <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
          </svg>
          <p class="text-gray-700 dark:text-gray-300">{{ dev.salary }}$</p>
        </div>
        
        <!-- Buttons -->
        <div class="flex justify-between mt-4 gap-5">
          <button @click="get_one(dev.id)" class="flex-1 rounded-lg bg-[#4756ca] text-white font-semibold hover:bg-[#371f9e] px-6 py-2">
            Info
          </button>
          <button class="flex-1 rounded-lg bg-[#f76b8a] text-white font-semibold hover:bg-[#f8223b] px-6 py-2">
            Delete
          </button>
        </div>
      </div>
    </div>
    <!-- Card end -->
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from "vuex";
const store = useStore()
const devs = computed(() => store.getters["admin/get_freelancers"])

const get_one = (id)=>{
    store.dispatch("admin/get_one_freelancer", id)
}

onMounted(() => {
    store.dispatch("admin/req_freelancers")
})
</script>