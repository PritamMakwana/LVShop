<script setup>
import {ref, computed} from 'vue'
import store from '../store'

const test = computed(() => store.state.test)

</script>

<template>
    <div>
    <h1>Hello</h1>
    <h1>{{ test }}</h1>
    </div>
</template>
