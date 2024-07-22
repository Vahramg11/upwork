<template>

    
    <div v-if="customer" class="mx-auto px-10 py-4  sm:px-20 content ml-12 transform ease-in-out duration-500 md:px-5 pb-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-1">
                <div class="bg-white p-4 rounded-lg shadow">
                    <div class="flex flex-col items-center text-center">
                        <div class="relative">
                            <img :src="'http://127.0.0.1:8000' + customer.photo"
                                class="rounded-full h-32 w-32 object-cover relative">
                            <div class="relative">
                                <!-- File Input Button -->
                                <label
                                v-if="user.user_type != 'freelancer'"
                                    class="p-1 bg-[#45454538] rounded-full hover:bg-[#494848aa] active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none absolute right-3 bottom-0 cursor-pointer">
                                    <input type="file" class="hidden" @change="handleFileUpload">
                                    <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
          C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
          C15.952,9,16,9.447,16,10z" />
                                    </svg>
                                </label>
                            </div>
                        </div>


                        <div class="mt-4">
                            <h4 class="text-xl font-bold">{{ customer.username }}</h4>

                            <div class="mt-4 space-x-2">
                                <button
                                    class="border border-[#3813db] text-[#3813db] px-4 py-2 rounded-lg shadow">Message</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div class="md:col-span-2">
                <div class="bg-white p-4 rounded-lg shadow mb-4">
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">First Name</h6>
                        <span :contenteditable="true" @blur="change_values('first_name', $event.target.innerText)">{{
                            customer.first_name }}</span>

                    </div>
                    <hr>
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">Last Name</h6>
                        <span :contenteditable="true" @blur="change_values('last_name', $event.target.innerText)">{{
                            customer.last_name }}</span>

                    </div>
                    <hr class="my-2">
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">Email</h6>
                        <span :contenteditable="true" @blur="change_values('email', $event.target.innerText)">{{
                            customer.email }}</span>
                    </div>
                    <hr class="my-2">
                    <div v-if="customer.summary" class="flex items-start mb-3 flex-col ">
                        <h6 class="text-sm font-semibold mr-2">summary</h6>
                        <span @blur="change_values('summary', $event.target.innerText)" :contenteditable="true"
                            class="text-left p-2"> {{ customer.summary }}</span>

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
                        <div v-for="proj in  customer.jobs " :key="proj.id"
                            class="  flex items-center mb-3 h-10  sm:h-8 rounded-md border p-3" :class="{
                                'border-[#ff4057] bg-[#EC489938]': proj.process == 'Start', 'border-[#1bf5af] bg-[#1bf5b038]': proj.process == 'Done'
                                , 'border-[#493bdb] bg-[#6E63F238]': proj.process == 'Process'
                            }">
                            <p class="text-gray-600 text-xs sm:text-sm">{{ proj.name }}</p>
                            <div class="flex items-center ml-auto">
                                <span class="text-gray-600 ml-2 text-xs sm:text-sm">{{ proj.process }}</span>
                               
                            </div>
                        </div>
                        <AddJob/>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import * as Yup from 'yup';
import AddJob from '../modals/AddJob.vue';
const store = useStore()
const router = useRoute().params
onMounted(() => {
    store.dispatch("admin/req_one_customer", router.username)
})
const customer = computed(() => store.getters["admin/get_one_customer"])
const user = computed(()=>store.state.auth.user)

let values = {}
const confirmed = ref(false)

const change_values = (field, value) => {
    value = value.trim()
    if (value) {
        values[field] = value
    }
}

const scheam = Yup.object({
    first_name: Yup.string().optional().nullable(),
    last_name: Yup.string().optional().nullable(),
    email: Yup.string().email().optional().nullable()
})

const edit = () => {
    try {
        scheam.validate(values).then(r => {
            if (Object.keys(r).length) {
                console.log(r, Object.keys(r));
                r.id = customer.value?.id
                store.dispatch("admin/change_customer_info", r)
                confirmed.value = true
                values = {}
             
            }
        }).catch(r => {
           r
        })
    }
    catch (err) {
        alert(err)
    }

}


const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
}



</script>



<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>