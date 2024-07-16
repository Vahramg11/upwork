<template>
    <div>
      <AdminMenu @option="get_option"/>
    </div>
    <router-view/>
  </template>
  
  <script setup>
  import AdminMenu from "@/components/menu/AdminMenu";
  import { ref } from "vue";
  

  const option = ref("Freelancers")
  function get_option(value) {
    option.value = value
  }
  </script>
  