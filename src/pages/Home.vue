<script setup>
import { ref } from 'vue';
import CardContainer from '../Layout/CardContainer.vue';
import InputField from '../components/Input.vue';
import { useFetchApi } from '../composable/useFetchApi';
import { getMovies } from '../services/movie';
import { watch } from 'vue';
import { onUnmounted } from 'vue';
import { onMounted } from 'vue';




const movies_choices = ref([]);
const searchQuery = ref('action');
const {data,fetchData,loading} = useFetchApi(()=>getMovies((searchQuery.value)));

const handleChange = async (e) => {
   searchQuery.value = e.target.value;
}

onMounted(fetchData)
watch(searchQuery,async(newv)=>{
    if(newv.length > 2){
        await fetchData();
        movies_choices.value = data;
    }else{
        searchQuery.value = 'action';
        await fetchData();
    }
    // fetchData();
},{immediate:true})




</script>


<template>
    <div class="bg-sky-950 h-full ">
        <InputField @input="handleChange" placeholder="Search For A Movie" classes='flex justify-center items-center h-20' inputClasses='form-input px-4 py-2 rounded w-[350px] focus:outline-none focus:shadow-outline' />
        <h1 v-if="loading" >loading....</h1>
        <CardContainer v-else-if="movies_choices"  :movies_choice="(data || movies_choices)" :key="movies_choices.length" />
    </div>
</template>