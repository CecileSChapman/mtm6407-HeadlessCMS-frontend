<template>
  <PostContentList :posts="data" />

</template>

<script setup>

 import {EVENTS_API_URL} from '@/helpers';
import PostContentList from '../../components/PostContentList.vue';

 const { data } = await useFetch(EVENTS_API_URL)

</script>