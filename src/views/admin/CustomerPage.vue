<template>
    <div>
        hello customer
        <router_view />
    </div>
</template>

<script setup>
import router from '@/router';
import { onMounted } from 'vue';
onMounted(() => {
    console.log(router);
})
</script>