<template>
    <div>
      <AdminMenu @option="get_option"/>
      <DevOption  v-if="option == 'Developers'"/>
      
    </div>
  </template>
  
  <script setup>
  import AdminMenu from "@/components/menu/AdminMenu";
  import DevOption from "@/components/options/DevOption";
  import { ref } from "vue";
  

  const option = ref()
  function get_option(value) {
    option.value = value
  }
  </script>
  