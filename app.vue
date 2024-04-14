<template>
  
  <PostList :posts="data" />

</template>

<script setup>

  const API_URL = 'https://mtm6407-headlesscms-backend.onrender.com/api/posts?populate[image][fields][0]=url&populate[authors][fields][1]=firstName&populate[authors][fields][2]=lastName&populate[authors][fields][3]=email';

  const { data } = await useFetch(API_URL);

//  add to head, from https://github.com/lostmart/quick-nuxt3-bootstrap5.2-integration

useHead({
  title: "Epic Reviews",
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

})

</script>

<style>

</style>
