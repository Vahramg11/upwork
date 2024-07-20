<template>
    <div>
        <AdminMenu/>
        "hello free"

    </div>
</template>

<script setup>
import AdminMenu from "@/components/menu/AdminMenu.vue"
import {onMounted} from "vue"

onMounted(()=>{
    alert("free")
})

</script>