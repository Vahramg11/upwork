<template>
    <div v-if="freelancer"
        class="mx-auto px-10 py-4  sm:px-20 content ml-12 transform ease-in-out duration-500 md:px-5 pb-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-1">
                <div class="bg-white p-4 rounded-lg shadow">
                    <div class="flex flex-col items-center text-center">
                        <div class="relative">
                            <img :src="'http://127.0.0.1:8000' + freelancer.photo"
                                class="rounded-full h-32 w-32 object-cover relative">
                            <div class="relative">
                                <!-- File Input Button -->
                                <label v-if="user.user_type != 'customer'"
                                    class="p-1 bg-[#45454538] rounded-full hover:bg-[#494848aa] active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none absolute right-3 bottom-0 cursor-pointer">
                                    <input type="file" class="hidden" @change="handleFileUpload" accept="image/*">
                                    <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
          C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
          C15.952,9,16,9.447,16,10z" />
                                    </svg>
                                </label>
                            </div>
                        </div>


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
                            class="text-black p-2 text-center rounded-lg text-sm  shadow-lg mb-4 border-solid border border-indigo-600">
                            {{ skill.name }}
                            <button v-if="user.user_type != 'customer'" type="button" @click="remove_skill(skill.id)"
                                class="end-2.5 text-gray-400 bg-transparent hover:text-gray-900 rounded p-1 text-sm ms-auto inline-flex justify-center items-center"
                                data-modal-hide="authentication-modal">
                                <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>


                        <AddSkills v-if="user.user_type != 'customer'" />

                    </div>
                </div>
            </div>

            <div class="md:col-span-2">
                <div class="bg-white p-4 rounded-lg shadow mb-4">
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">First Name</h6>
                        <span :contenteditable="editable()" @blur="change_values('first_name', $event.target.innerText)">{{
                            freelancer.first_name }}</span>

                    </div>
                    <hr>
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">Last Name</h6>
                        <span :contenteditable="editable()" @blur="change_values('last_name', $event.target.innerText)">{{
                            freelancer.last_name }}</span>

                    </div>
                    <hr class="my-2">
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">Email</h6>
                        <span :contenteditable="editable()" @blur="change_values('email', $event.target.innerText)">{{
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
                            <span :contenteditable="editable()" @blur="change_values('salary', $event.target.innerText)">{{
                                freelancer.salary }}</span>
                            $
                        </span>

                        <hr class="my-2">
                        <hr class="my-2">
                    </div>
                    <div class="mt-4 flex" v-if="editable()">
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
                        <div v-for="proj in  freelancer.jobs " :key="proj.id"
                            class="  flex items-center mb-3 h-10  sm:h-8 rounded-md border p-3" :class="{
                                'border-[#ff4057] bg-[#EC489938]': proj.process == 'Start', 'border-[#1bf5af] bg-[#1bf5b038]': proj.process == 'Done'
                                , 'border-[#493bdb] bg-[#6E63F238]': proj.process == 'Process'
                            }">
                            <p class="text-gray-600 text-xs sm:text-sm">{{ proj.name }}</p>
                            <div class="flex items-center ml-auto">
                                <span class="text-gray-600 ml-2 text-xs sm:text-sm">{{ proj.process }}</span>
                            </div>
                            <div v-if="user.user_type != 'customer'">
                                <select @change="change_job_status($event, proj)"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 ml-2">
                                    <option v-for="elm, i in job_types" :value="elm[1]" :key="i">{{ elm[1] }}</option>
                                </select>
                            </div>
                        </div>
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
import { useToast } from "primevue/usetoast";
import * as Yup from 'yup';
import AddSkills from '../modals/AddSkills.vue';
const store = useStore()
const toast = useToast();
const user = computed(() => store.state.auth.user)
const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};
const job_types = computed(() => store.state.admin.job_types)

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};


const router = useRoute().params

const editable = () => {
    return user.value.user_type != "customer"
}

onMounted(() => {
    console.log(store.state.auth.user.user_type);
    if (store.state.auth.user.user_type == 'admin') {

        store.dispatch("admin/req_one_freelancer", router.username)
    } else if (store.state.auth.user.user_type == 'customer') {
        store.dispatch("admin/req_one_freelancer", router.freelancerUsername)

    } else if (store.state.auth.user.user_type == 'freelancer') {
        store.dispatch("admin/req_one_freelancer", router.username)

    }


})
const freelancer = computed(() => store.getters["admin/get_one_freelancer"])

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
    scheam.validate(values).then(r => {
        if (Object.keys(r).length) {
            r.id = freelancer.value?.id
            store.dispatch("admin/change_freelancer_info", r)
            confirmed.value = true
            values = {}
            showSuccess()

        }
    }).catch(r => {
        showError(r)
    })

}


const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    store.dispatch("admin/change_free_image",e.target.files[0] )
}


const remove_skill = (id) => {
    store.commit('freelancer/remove_skills_from_developer', id)
    store.dispatch("freelancer/delete_skill_from_freelancer", id)
}
const change_job_status = (event, proj) => {
    store.commit("admin/change_freelancer_job_status", { job: proj, status: event.target.value })
    store.dispatch("admin/change_freelancer_job_process", { id: proj.id, status: event.target.value })
}


</script>



<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>