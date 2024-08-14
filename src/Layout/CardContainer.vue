<script setup>
import { onMounted } from 'vue';
import Card from '../components/Card.vue';
import { useFetchApi } from '../composable/useFetchApi';
import { getMovies } from '../services/movie';
import {defineProps} from 'vue';
import { watch } from 'vue';

const props = defineProps({
    movies_choice: Array
});





watch(() => props.movies_choice, (newVal, oldVal) => {
    console.log('Change detected in movies_choice:', newVal);
}, { deep: true });

console.log('movies_choice',props.movies_choice)

</script>




<template>
     <div class="w-full grid grid-cols-4 md:grid-cols-3 gap-4 p-[50px]" >
        <div class="container " v-for="movie in props.movies_choice">
            <Card :Title="movie.Title" :Year="movie.Year" :Poster="movie.Poster" :id="movie.imdbID"  />
        </div>
        </div>
</template>