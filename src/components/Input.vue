<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    type: {
        type: String,
        default:'text'
    },
    placeholder: String,
    classes: {
        type: Array,
        default:''
    },
    inputClasses:{
        type: Array,
        default:''
    },
})
</script>


<template>
    <div :class="['',classes]">
        <input  :type="type" :placeholder="placeholder" :class="['',inputClasses]" >
    </div>
</template>