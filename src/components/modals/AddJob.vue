
<template>
    <div v-if="user.user_type != 'freelancer'">



        <div class="flex justify-start">
            <button type="button" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                @click="toggle_modal"
                class="border  text-[#3813db] px-3 py-2 rounded-lg shadow focus:ring-2 focus:outline-none focus:ring-indigo-500 cursor-pointer">
                Add job
                <span class="sr-only">Icon description</span>
            </button>
        </div>

        <div id="authentication-modal" tabindex="-1" :class="{ 'hidden': modal }"
            class="overflow-y-auto overflow-x-hidden absolute w-full inset-0 h-[calc(100%-1rem)] max-h-full ">
            <div class="absolute p-4 w-full max-h-full top-0 left-0 right-0 bottom-0 m-auto ">
                <div class="relative bg-white rounded-lg shadow">
                    <div class="flex items-center justify-between p-5 border-b rounded-t ">
                        <h3 class="text-xl font-semibold text-gray-900 ">
                            Sign in to our platform
                        </h3>
                        <button type="button" @click="toggle_modal"
                            class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="authentication-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5">
                        <form class="space-y-4" @submit.prevent="req_data_job">
                            <div>
                                <label for="name"
                                    class="text-left block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                                <input type="text" name="name" id="name" v-model="name" v-bind="nameAttrs"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  "
                                    placeholder="job title..." />
                                <p>{{ errors.name }}</p>
                            </div>

                            <div>
                                <label for="description"
                                    class="text-left block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                                <input type="text" name="description" id="description" v-model="description"
                                    v-bind="descriptionAttrs"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  "
                                    placeholder="job description..." />
                                <p>{{ errors.description }}</p>
                            </div>

                            <div>
                                <label for="experience"
                                    class="text-left block mb-2 text-sm font-medium text-gray-900 ">Experience</label>
                                <input type="number" name="experience" id="experience" v-model="experience"
                                    v-bind="experienceAttrs"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  "
                                    placeholder="experience..." />
                                <p>{{ errors.experience }}</p>
                            </div>

                            <div class="flex flex-col gap-3">
                                <label for="default-search"
                                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input v-model="skillname" type="search" id="default-search"
                                        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Filter skills" />
                                </div>
                                <div class="border flex flex-wrap gap-1 justify-center">
                                    <div v-for="skill, i in skills.filter(elm => elm.name.includes(skillname))" :key="i"
                                        @click="add_skill_to_job(skill.id)"
                                        class="text-black p-2  text-center cursor-pointer rounded-lg text-sm  shadow-lg mb-4 border border-indigo-600">
                                        {{ skill.name }}

                                    </div>
                                </div>
                                <p>{{ errors.choosen_skills }}</p>


                            </div>

                            <button type="submit"
                                class="focus:border-black border-[1px] text-center text-white flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">Submit
                                job
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>  
<!-- :class="{ 'bg-indigo-400': choosen_skills.includes(skill.id) }" -->


<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useForm } from 'vee-validate';
import * as yup from "yup"

const init_value_skills = ref([])
const { handleSubmit, resetForm, errors, defineField } = useForm({
  
    validationSchema: yup.object({
        name: yup.string().required().min(5),
        experience: yup.number().max(30).min(0).required(),
        description: yup.string().required(),
    })
})
const store = useStore()
const skills = computed(() => store.state.customer.skills)
const user = computed(() => store.state.auth.user)
const modal = ref(true)

const toggle_modal = () => {
    modal.value = !modal.value
}

const skillname = ref("")

const [name, nameAttrs] = defineField("name")
const [description, descriptionAttrs] = defineField("description")
const [experience, experienceAttrs] = defineField("experience")
defineField("choosen_skills")

const req_data_job = handleSubmit(values => {
    if(!init_value_skills.value.length){
        alert("chka")
        return
    }else{

        values.skills = init_value_skills.value
    }
    store.dispatch("customer/add_job", values)
    resetForm()
    toggle_modal()
})

const add_skill_to_job = (val) => {
    if (init_value_skills.value.includes(val)) {
        init_value_skills.value.splice(init_value_skills.value.indexOf(val), 1)
    } else {
        init_value_skills.value.push(val)
    }

    console.log(val, init_value_skills.value);

}

onMounted(() => {
    store.dispatch("customer/all_skills")
    console.log("skills.value", skills.value);
})
</script>