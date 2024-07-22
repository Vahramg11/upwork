<template>
    <div class="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ml-12 p-2 md:p-5" >
    <!-- Card start -->
    <div v-for="custom in customers" :key="custom.id" class="bg-[#fcfefe] rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <!-- Image and Name -->
      <div class="relative">
        <img v-if="custom.photo" class="object-cover h-64 w-full rounded-t-lg" :src="'http://127.0.0.1:8000' + custom.photo" alt="Profile Image">
        <div class="absolute bottom-0 left-0 right-0 from-black via-transparent to-transparent py-2 px-4 text-white">
          <h3 class="font-bold text-xl">{{ custom.first_name }} {{ custom.last_name }}</h3>
        </div>
      </div>
      
      <!-- Details -->
      <div class="px-4 py-4">
        <!-- Email -->
        <div class="flex items-center mb-2">
          <svg class="h-5 w-5 text-gray-400  mr-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <p class="text-gray-700">{{ custom.email }}</p>
        </div>
        
        <!-- Buttons -->
        <div class="flex justify-between mt-4 gap-5">
          <button @click="get_one(custom.username)" class="flex-1 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-[#371f9e] px-6 py-2">
            Info
          </button>
          <button v-if='store.state.auth.user.user_type == "admin"' @click="delete_customer(custom.id)" class="flex-1 rounded-lg bg-pink-500 text-white font-semibold hover:bg-[#f8223b] px-6 py-2">
            Delete
          </button>
        </div>
      </div>
    </div>
    <!-- Card end -->
  </div>
</template>

<script setup>
import router from '@/router';
import { computed, onMounted } from 'vue';
import { useStore } from "vuex";
const store = useStore()
const customers = computed(() => store.getters["admin/get_customers"])

const get_one = (username)=>{
    router.push({ name: 'customer-info', params: { username } })
}

const delete_customer = (id)=>{
  store.dispatch("admin/remove_customer", id)

}

onMounted(()=>{
    store.dispatch("admin/req_customers")
})
</script>