<template>
    
    <div>
        <button @click="toggle_modal" type="button" data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            class="border  text-[#3813db] px-3 py-2 rounded-lg shadow focus:ring-2 focus:outline-none focus:ring-indigo-500 cursor-pointer">
            Add
        </button>
    </div>

    <div id="authentication-modal" tabindex="-1" aria-hidden="true" :class="{ 'hidden': modal }"
        class="overflow-y-auto overflow-x-hidden absolute w-full inset-0 h-[calc(100%-1rem)] max-h-full ">
        <div class="absolute p-4 w-full max-w-md max-h-full top-0 left-0 right-0 bottom-0 m-auto ">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Choose your skills
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
                <!-- Modal body -->
                <div class="p-4 md:p-5">
                    <form class="space-y-4" @submit.prevent="submit_skills">
                        <div class="flex flex-wrap gap-2">
                            <div v-for="skill in skills" :key="skill.id"
                                class="text-black p-2 text-center rounded-lg text-sm  shadow-lg mb-4"
                                :style="{ 'border': `1px solid ${random_color()}`, 'background-color': skill.have_skill || one_freelancer.skills.includes(skill) ? random_color() + 80 : 'white' }"
                                @click="add_skill(skill)">
                                {{ skill.name }}

                           
                            </div>

                        </div>
                        <button type="submit"
                            class="focus:border-black border-[1px] text-center text-white flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, onUpdated,onUnmounted } from 'vue';
import { useStore } from 'vuex';


const store = useStore()
const skills = computed(() => store.state.freelancer.skills)
onUpdated(()=>{
    console.log("allskills", skills.value);
})


const one_freelancer = computed(() => store.getters["admin/get_one_freelancer"])
const modal = ref(true)

const colors = ["#070f4e", "#a55233", "#17b794", "#5c5470", "#f96d00", "#ff007b", "#400082", "#ff0000", "#00aaa0", "#efd510"]
const arr = ref([])

const add_skill = (skill) => {
    store.commit("admin/add_skill_to_freelancer", skill)
    !arr.value.find(elm=>elm.id == skill.id)?arr.value.push(skill): ''
    console.log(arr.value, "arr");
}

const toggle_modal = () => {
    modal.value = !modal.value
    console.log(arr.value, "arrrrr");

}
const random_color = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

const submit_skills = () => {
    store.dispatch("freelancer/add_skills", arr.value)
    toggle_modal()
}

onUnmounted(()=>{
    arr.value = []
})

onMounted(() => {
    arr.value = JSON.parse(JSON.stringify(one_freelancer.value.skills))
    store.dispatch("freelancer/get_skills", { id: one_freelancer.value.id })
})
</script>