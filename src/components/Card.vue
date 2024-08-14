<script setup>
import { defineProps } from 'vue'
import {RouterLink } from 'vue-router'
const props = defineProps({
   Title:{
    type:String,
    default:"Movie Name"
   },
   Year:{
    type:Number,
    default:"2021"
   },
   id:String,
   Poster:String,
   classes:{
    type:Array,
   }
})
</script>


<template>
    <RouterLink :to="`movie/${id}`" class="w-[250px] md:w-[300px] lg:w-[350px] rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full h-[350px] object-cover" :src="Poster" :alt="Title">
  <div class="px-6 py-4">
    <div class="font-bold text-xl text-white mb-2">{{ Title }}</div>
    <p class="text-white text-base">
      {{ Year }}
    </p>
  </div>
</RouterLink>

</template>