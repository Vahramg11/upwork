
<template>

    <div class="flex justify-start">
        <button type="button" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
            @click="toggle_modal"
            class="border  text-[#3813db] px-3 py-2 rounded-lg shadow focus:ring-2 focus:outline-none focus:ring-indigo-500 cursor-pointer">
            Add job
            <span class="sr-only">Icon description</span>
        </button>
    </div>

    <div id="authentication-modal" tabindex="-1" aria-hidden="true" :class="{ 'hidden': modal }"
    
        class="overflow-y-auto overflow-x-hidden absolute w-full inset-0 h-[calc(100%-1rem)] max-h-full ">
        <div class="absolute p-4 w-full max-w-md max-h-full top-0 left-0 right-0 bottom-0 m-auto ">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Sign in to our platform
                    </h3>
                    <button type="button" @click="toggle_modal"
                        class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                                class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add
                                Job</label>
                            <input type="text" name="name" id="name" v-model="name" v-bind="nameAttrs"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
                                placeholder="job title..." />
                                <p>{{ errors.name }}</p>
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
</template>  

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useForm } from 'vee-validate';
import * as yup from "yup"
const { handleSubmit, resetForm, errors, defineField } = useForm({
    validationSchema: yup.object({
        name: yup.string().required().min(5)
    })
})
const store = useStore()
const modal = ref(true)
const toggle_modal = () => {
    modal.value = !modal.value
}

const [name, nameAttrs] = defineField("name")
const req_data_job = handleSubmit(values => {
    console.log(values);
    store.dispatch("customer/add_job", values)
    resetForm()
    toggle_modal()
})
</script>