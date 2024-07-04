<template>
    <div v-if="freelancer">
        {{ freelancer.first_name }}

    </div>
    <div v-if="freelancer" class="mx-auto px-5 py-4 bg-[#eaf6f6] w-full sm:px-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-1">
                <div class="bg-white p-4 rounded-lg shadow">
                    <div class="flex flex-col items-center text-center">
                        <img :src="'http://127.0.0.1:8000' + freelancer.photo" class="rounded-full h-32 w-32 object-cover">
                        <div class="mt-4">
                            <h4 class="text-xl font-bold">{{ freelancer.username }}</h4>
                            <p class="text-gray-500 mb-1">{{ freelancer.profession }}</p>

                            <div class="mt-4 space-x-2">
                                <button
                                    class="border border-[#3813db] text-[#3813db] px-4 py-2 rounded-lg shadow">Message</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-4 rounded-lg shadow mt-4">
                    <h1 class="text-start mb-3 font-bold">Skills</h1>
                    <div class="flex flex-wrap gap-2">
                        <div v-for="skill in freelancer.skills" :key="skill.id"
                            class="text-black p-2 text-center rounded-lg text-sm  shadow-lg mb-4"
                            :style="{ 'border': `1px solid ${random_color()}` }">
                            {{ skill.name }}

                        </div>

                    </div>

                </div>
            </div>

            <div class="md:col-span-2">
                <div class="bg-white p-4 rounded-lg shadow mb-4">
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">First Name</h6>
                        <span :contenteditable="true" @blur="change_values('first_name', $event.target.innerText)">{{
                            freelancer.first_name }}</span>

                    </div>
                    <hr>
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">Last Name</h6>
                        <span :contenteditable="true" @blur="change_values('last_name', $event.target.innerText)">{{
                            freelancer.last_name }}</span>

                    </div>
                    <hr class="my-2">
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">Email</h6>
                        <span :contenteditable="true" @blur="change_values('email', $event.target.innerText)">{{
                            freelancer.email }}</span>
                    </div>
                    <hr class="my-2">
                    <div v-if="freelancer.summary" class="flex items-start mb-3 flex-col ">
                        <h6 class="text-sm font-semibold mr-2">summary</h6>
                        <span @blur="change_values('summary', $event.target.innerText)" :contenteditable="true"
                            class="text-left p-2"> {{ freelancer.summary }}</span>

                    </div>
                    <hr class="my-2" v-if="freelancer.salary">
                    <div v-if="freelancer.salary" class="flex items-start mb-3 ">
                        <h6 class="text-sm font-semibold mr-2">salary</h6>
                        <span>
                            <span :contenteditable="true" @blur="change_values('salary', $event.target.innerText)">{{
                                freelancer.salary }}</span>
                            $
                        </span>

                        <hr class="my-2">
                        <hr class="my-2">
                    </div>
                    <div class="mt-4 flex">
                        <button @click="edit" class="bg-[#3813db] text-white px-4 py-2 rounded-lg shadow">Edit</button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h6 class="flex items-center mb-3 text-info"><svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 mr-2 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>
                            Project Status
                        </h6>
                        <div v-for="proj in  freelancer.job " :key="proj.id"
                            class="  flex items-center mb-3 h-10  sm:h-8 rounded-md border p-3" :class="{
                                'border-[#ff4057] bg-[#ff405738]': proj.process == 'Start', 'border-[#1bf5af] bg-[#1bf5b038]': proj.process == 'Done'
                                , 'border-[#0e7cf4] bg-[#0e7cf438]': proj.process == 'Process'
                            }">
                            <p class="text-gray-600 text-xs sm:text-sm">{{ proj.name }}</p>
                            <div class="flex items-center ml-auto">
                                <span class="text-gray-600 ml-2 text-xs sm:text-sm">{{ proj.process }}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import * as Yup from 'yup';
const store = useStore()
const colors = ["#070f4e", "#a55233", "#17b794", "#5c5470", "#f96d00", "#ff007b", "#400082", "#ff0000", "#00aaa0", "#efd510"]
const random_color = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}
const router = useRoute().params

onMounted(() => {
    store.dispatch("admin/get_one_freelancer", router.username)
})
const freelancer = computed(() => store.getters["admin/get_one_freelancer"])
const values = {}

const change_values = (field, value) => {
    value = value.trim()
    if (value) {
        values[field] = value
        console.log(field, value);
    }
}

const scheam = Yup.object({
    first_name: Yup.string().optional().nullable(),
    last_name: Yup.string().optional().nullable(),
    email: Yup.string().email().optional().nullable()
})

const edit = () => {
    scheam.validate(values).then(r => {
        if(Object.keys(r)){
            r.id = freelancer.value?.id
            // store.dispatch("admin/change_info")
            console.log(r);
        }
    }).catch(r => {
        alert(r)
    })

}


</script>



