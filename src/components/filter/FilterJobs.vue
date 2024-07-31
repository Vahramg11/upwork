<template>
    <div class="m-2 ml-7 w-2/3">
        <form>
    <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="flex flex-col">
          <label for="Experience" class="text-stone-600 text-sm font-medium">Experience</label>
          <input type="number" id="Experience" placeholder="min experience" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
  
        <div class="flex flex-col">
          <label for="min_price" class="text-stone-600 text-sm font-medium">Min Price</label>
          <input type="number" id="min_price" placeholder="min price" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
  
        <div class="flex flex-col">
          <label for="max_price" class="text-stone-600 text-sm font-medium">Max Price</label>
          <input type="number" id="max_price" placeholder="max price" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
  
        <div class="flex flex-col">
          <label for="status" class="text-stone-600 text-sm font-medium">Skills</label>
  
          <select mult id="skill" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option hidden>choose skill</option>
            <option v-for="skill in skills" :key="skill.id" value="">{{ skill.name }}</option>
          </select>
        </div>
      </div>
  
      <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
        <button type= "button" class="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">Reset</button>
        <button type= "button" @click="filter_jobs" class="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">Search</button>
      </div>
    </div>
</form>
  </div>
</template>
  
<script setup>
import {computed, onMounted} from "vue"
import { useStore } from 'vuex';
const store = useStore()
const skills = computed(()=>store.state.customer.skills)


const filter_jobs = (values)=>{
    console.log(values);

}

onMounted(()=>{
    store.dispatch("customer/all_skills")
})

</script>