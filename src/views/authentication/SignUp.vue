<template>
    <section class="bg-white">
        <div class="flex justify-center min-h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/5"
                style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')">
            </div>

            <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div class="w-full">
                    <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
                        Get your free account now.
                    </h1>

                    <p class="mt-4 text-gray-500 d400">
                        Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                    </p>

                    <div class="mt-6 flex flex-start">
                        <h1 class="text-gray-500 d300">Select type of account</h1>


                    </div>
                    <br>


                    <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 justify-center items-center" @submit.prevent="onsubmit">
                        <div class="mt-3 md:flex md:items-center md:-mx-2">
                            <button type="button" @click="change_role('F')"
                                class="text-blue-500 border border-blue-500 flex justify-center w-full px-6 py-3 rounded-lg md:w-auto md:mx-2 focus:outline-none"
                                :class="{ 'bg-blue-500 text-white  ': role == 'F' }">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                <span class="mx-2">
                                    Freelancer
                                </span>
                            </button>

                            <button type="button" @click="change_role('C')"
                                class="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 focus:outline-none"
                                :class="{ 'bg-blue-500 text-white  ': role == 'C' }">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                                <span class="mx-2">
                                    Customer
                                </span>
                            </button>
                        </div>
                        <h1>{{ errors.user_type }}</h1>
                        <div>
                            <label class="text-left block mb-2 text-sm text-gray-600 d200">First Name</label>
                            <input v-model="first_name" v-bind="first_nameAttrs" type="text" placeholder="John"
                                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg d focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p>{{ errors.first_name }}</p>
                        </div>

                        <div>
                            <label class="text-left block mb-2 text-sm text-gray-600 d200">Last name</label>
                            <input v-model="last_name" v-bind="last_nameAttrs" type="text" placeholder="Snow"
                                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg d focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p>{{ errors.last_name }}</p>
                        </div>

                        <div>
                            <label class="text-left block mb-2 text-sm text-gray-600 d200">Username
                            </label>
                            <input v-model="username" v-bind="usernameAttrs" type="text" placeholder="JohnSnow"
                                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg d focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p>{{ errors.username }}</p>
                        </div>

                        <div>
                            <label class="text-left block mb-2 text-sm text-gray-600 d200">Email
                                address</label>
                            <input v-model="email" v-bind="emailAttrs" type="email" placeholder="johnsnow@example.com"
                                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg d focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p>{{ errors.email }}</p>
                        </div>

                        <div v-if="role == 'F'">
                            <label class="text-left block mb-2 text-sm text-gray-600 d200">Profession</label>
                            <select v-model="profession" v-bind="professionAttrs"
                                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg d focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                                >
                                <!-- <option hidden class="text-black"> Choose your profession</option> -->
                                <option v-for="prof in professions" :key="prof.id" :value="prof.id" class="text-black">{{
                                    prof.name }}</option>

                            </select>
                            <p>{{ errors.profession }}</p>

                        </div>




                        <div v-if="role == 'C'">
                            <label for="phone-input"
                                class="block mb-2 text-sm font-medium text-gray-900 text-left">Phone
                                number:</label>
                            <input type="text" id="phone-input" aria-describedby="helper-text-explanation"
                                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg d focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="123-456-7890" required />
                        </div>

                        <div>
                            <label class="text-left block mb-2 text-sm text-gray-600 d200">Password</label>
                            <input v-model="password1" v-bind="passwordAttrs" type="text" placeholder="Enter your password"
                                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg d focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p>{{ errors.password1 }}</p>
                        </div>

                        <div>
                            <label class="text-left block mb-2 text-sm text-gray-600 d200">Confirm
                                password</label>
                            <input v-model="password2" v-bind="password2Attrs" type="text" placeholder="Confirm password"
                                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg d focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p>{{ errors.password2 }}</p>
                        </div>
                    <div class="h-full flex items-end">
                        <button
                            class="flex h-12 items-center justify-between w-full px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Sign Up </span>

                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                     
                        <div class="flex items-center">
                            <p class="text-left">Already have an account ? <router-link :to="{ name: 'sign_in' }"
                                    class="text-blue-700 font-bold underline"> Sign In</router-link>
                            </p>
                        </div>
                        <br>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useForm } from "vee-validate"
import { useStore } from 'vuex'
import { computed, onMounted, ref } from "vue";
import * as yup from 'yup'
import { useRouter } from 'vue-router'
const role = ref("F")
const router = useRouter()
const store = useStore()
const { handleSubmit, errors, defineField, resetForm } = useForm({

    validationSchema: yup.object({
        user_type: yup.string().required(),
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        username: yup.string().required(),
        email: yup.string().email().required(),
        profession: yup.string().when('user_type', {
            is: (value) => value === 'F',
            then: (s) => s.required(),
            otherwise: (s) => s.nullable(),
        }),
        password1: yup
            .string().required(),
        password2: yup
            .string()
            .required()
            .oneOf([yup.ref("password1")], 'Passwords do not match'),
    }),

    initialValues: {
        user_type: role.value,
    },


})
const [first_name, first_nameAttrs] = defineField('first_name');
const [last_name, last_nameAttrs] = defineField('last_name');
const [username, usernameAttrs] = defineField('username');
const [email, emailAttrs] = defineField('email');
const [profession, professionAttrs] = defineField('profession');
const [password1, passwordAttrs] = defineField('password1');
const [password2, password2Attrs] = defineField('password2');
const [user_type] = defineField('user_type');


const onsubmit = handleSubmit((values) => {
    resetForm()
    store.dispatch('auth/sign_up', values)
    router.push({ name: 'sign_in' })
}
)
const change_role = (e) => {
    role.value = e
    user_type.value = e
}

const professions = computed(() => store.getters["auth/get_professions"])
onMounted(() => {
    store.dispatch("auth/req_professions")
})

</script>
