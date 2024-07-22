<template>
    <div>
        <AdminMenu/>
        <!-- <CustomerInfo/> -->
        <router-view/>
    </div>
</template>

<script setup>
import AdminMenu from '@/components/menu/AdminMenu.vue';
// import CustomerInfo from '@/components/options/CustomerInfo.vue';

</script>