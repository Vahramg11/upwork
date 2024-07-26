<template>
    <div>
        <!-- component -->
        <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
            <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md w-1/2">
                <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
                <form @submit.prevent="onsubmit">
                    <div class="mb-4 text-left">
                        <label for="newPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">New
                            password</label>
                        <input v-model="password" v-bind="passwordAttrs" type="password" id="password"
                            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="password" required>
                        <p>{{ errors.password }}</p>
                    </div>
                    <div class="mb-4 text-left">
                        <label for="confirm" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm
                            password</label>
                        <input v-model="confirm" v-bind="confirmAttrs" type="password" id="confirm"
                            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="confirm password" required>
                        <p>{{ errors.confirm }}</p>

                    </div>
                    
                    <button type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import * as yup from "yup"
import { useForm } from "vee-validate"
import { useRoute } from "vue-router";
import axios from "axios";
import router from "@/router";


const { handleSubmit, errors, defineField, resetForm } = useForm({
    validationSchema: yup.object({
        password: yup.string().min(8).max(12).required(),
        confirm: yup
            .string()
            .required()
            .oneOf([yup.ref("password")], 'Passwords do not match'),

    })

})
const [password, passwordAttrs] = defineField('password');
const [confirm, confirmAttrs] = defineField('confirm');
const route = useRoute()

const onsubmit = handleSubmit(async (values) => {

    await axios.post("http://127.0.0.1:8000/api/password_reset/confirm/", {
        password: values.password,
        token: route.params.token
    })
    router.push("/")
    resetForm()

})

</script>