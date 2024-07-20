<template>
  <aside
    class="w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B] ">
    <!-- open sidebar button -->
    <div
      class="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white  bg-[#1E293B]  absolute top-2 rounded-full h-12">

    </div>
    <div @click="setDark('dark')" :class="{ 'hidden': mode }"
      class="moon text-white hover:text-blue-500  -right-6 transition transform ease-in-out duration-500 flex border-4 border-white  bg-[#1E293B]  absolute top-2 p-3 rounded-full hover:rotate-45">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
        class="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </div>


    <div @click="setDark('light')"
      class="text-white hover:text-blue-500  -right-6 transition transform ease-in-out duration-500  border-4 border-white  bg-[#1E293B] absolute top-2 p-3 rounded-full  hover:rotate-45"
      :class="{ 'hidden': !mode }">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    </div>
    <!-- MAX SIDEBAR-->
    <div class="max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]">
      <div
        class="hover:ml-4 w-full text-white hover:text-purple-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          class="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <div>
          Home
        </div>
      </div>
      <div
        class="hover:ml-4 w-full text-white hover:text-purple-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        <div>
          Table
        </div>
      </div>
      <div
        class="hover:ml-4 w-full text-white hover:text-purple-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
        <div>
          Graph
        </div>
      </div>
    </div>
    <!-- MINI SIDEBAR-->
    <div class="mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]">
      <div
        class="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          class="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </div>



      <div
        class="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </div>
      <div
        class="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      </div>
      <button @click="logOut"
        class="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
        </svg>
      </button>
    </div>


  </aside>
  <!-- CONTENT -->
  <div class="content ml-12 transform ease-in-out duration-500  px-2 md:px-5 ">
  
    <div class="flex flex-wrap my-5 -mx-2" >
      <button
      v-if="user.user_type != 'freelancer'"
       class="w-full lg:w-1/3 p-2" @click="user.user_type == 'admin' ?router.push('/admin/freelancers') : router.push(`/customer/${user.username}/freelancers`), choosen = 'F'"
      :class="{'lg:w-1/2 md:w-1/2': user.user_type != 'admin'}"
      >
        <div
          class="flex items-center flex-row w-full bg-gradient-to-r rounded-md p-3   from-indigo-500 via-purple-500 to-pink-500"
          >
          <div
            class="flex items-center p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12  text-indigo-500  bg-white"
            :class="{ 'dark': mode,   }">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="object-scale-down transition duration-500">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <div class="flex flex-col justify-around flex-grow ml-5 text-white">
            <div class="text-xs whitespace-nowrap">
              Freelancers
            </div>
            <div class="">
            </div>
          </div>
          <div class=" flex items-center flex-none text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

          </div>
        </div>
      </button>
      <button 
      v-if="user.user_type != 'customer'" 
      class="w-full md:w-1/2 lg:w-1/3 p-2" 
      :class="{'lg:w-1/2 md:w-1/2': user.user_type != 'admin'}"
      @click="router.push('/admin/customers'), 
      
      choosen = 'C'">
        <div
          class="flex items-center flex-row w-full bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
          <div
            class="flex text-indigo-500 items-center bg-white p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="object-scale-down transition duration-500">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
          </div>
          <div class="flex flex-col justify-around flex-grow ml-5 text-white">
            <div class="text-xs whitespace-nowrap">
              Customers
            </div>
            <div class="">
            </div>
          </div>
          <div class=" flex items-center flex-none text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

          </div>
        </div>
      </button>
      <button 
      class="w-full md:w-1/2 lg:w-1/3 p-2 " 
      :class="{'lg:w-1/2 md:w-1/2': user.user_type != 'admin'}"
      @click="user.user_type == 'admin' ?router.push('/admin/jobs') : router.push(`/customer/${user.username}/jobs`), choosen = 'J'"
      >
      
        <div
          class="flex items-center flex-row w-full bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
          <div
            class="flex text-indigo-500 items-center bg-white p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="object-scale-down transition duration-500 ">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          </div>
          <div class="flex flex-col justify-around flex-grow ml-5 text-white">
            <div class="text-xs whitespace-nowrap">
              Jobs
            </div>
            <div class="">
            </div>
          </div>
          <div class=" flex items-center flex-none text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

          </div>
        </div>
      </button>

    </div>
  </div>
</template>
  
<script setup>
import router from '@/router';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';


const store = useStore()
const logOut = () => {
  store.dispatch("auth/log_out")
}
const choosen = ref('F')
const user = computed(()=>store.state.auth.user)
console.log(user.value, "val");
// const mode = ref(true)

// const setDark = (val) => {
//   mode.value = !mode.value
//   if (val === "dark") {
//     console.log(mode.value);
//     // document.documentElement.classList.add('dark')
//     // moon.classList.add("hidden")
//     // sun.classList.remove("hidden")
//   } else {
//     // document.documentElement.classList.remove('dark')
//     // sun.classList.add("hidden")
//     // moon.classList.remove("hidden")
//     console.log(mode.value);
//   }
// }
</script>
  