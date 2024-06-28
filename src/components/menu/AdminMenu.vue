<template>
    <div class="relative inline-block text-left w-64" @click="toggleOpen">
      <button
        class="w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 rounded inline-flex justify-between items-center dark:bg-[#20293A] dark:border-slate-700 dark:text-gray-400"
      >
        <span>Choose an option</span>
        <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
  
      <div
        v-if="check"
        class="absolute z-50 mt-2 w-full rounded-md shadow-lg bg-white border border-gray-200 dark:bg-[#20293A] dark:border-slate-700"
      >
        <div
          class="py-1 text-gray-700 dark:text-gray-400 text-sm"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            v-for="(elm, i) in options"
            :key="i"
            @click="emitOption(elm)"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#161d2a] w-full"
            role="menuitem"
          >
            {{ elm }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { defineEmits } from 'vue';
  
  const check = ref(false);
  const options = ref(["Developers", "Customers", "Jobs"]);
  
  const emit = defineEmits(['option']);
  
  function toggleOpen() {
    check.value = !check.value;
  }
  
  function emitOption(value) {
    emit('option', value);
  }
  </script>
  