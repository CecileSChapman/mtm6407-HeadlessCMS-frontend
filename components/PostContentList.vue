<template>
   
  <div class="postContentList"> 
    <div class="postContent" v-for="post in posts.data">
        <h2>{{ post.attributes.title }}</h2>
        <span> {{ post.attributes.createdAt }}</span>
    </div>
  </div>

</template>

<script setup>

  defineProps({
    posts: Object
  });

</script>