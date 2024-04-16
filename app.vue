<template>
  <div>
    <NuxtPage/>
  </div>

</template>

<script setup>
const API_URL = 'https://mtm6407-headlesscms-backend.onrender.com/api/posts?populate[image][fields][0]=url&populate[authors][fields][1]=firstName&populate[authors][fields][2]=lastName&populate[authors][fields][3]=email';
const { data } = await useFetch(API_URL);
const BASE_URL = '/posts/';

defineProps({
  posts: Object
});

useHead({
  title: "Munch, Match, and Melody",
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
      crossorigin: "anonymous"
    },
    {
      href: "https://kit.fontawesome.com/a369465566.js",
      crossorigin: "anonymous"
    }
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
      integrity: "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",
      crossorigin: "anonymous"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js",
      integrity: "sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy",
      crossorigin: "anonymous"
    }
  ]
});
</script>

<style scoped>
.card {
  border: solid 3px #6dec99;
  border-radius: 8px;
}

.card-img-top {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  max-height: 200px;
  object-fit: cover;
}

.card-title {
  color: #EC6DBD;
}

.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.btn-primary {
  background-color: #EC6DBD;
  border: none;
}

.btn-primary:hover {
  background-color: #C850A0;
}
</style>
