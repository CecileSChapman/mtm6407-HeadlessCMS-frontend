<template>
  
  <div class="post-single">
    <h2> {{ data.data.attributes.title }}</h2>
    <p>By: 
      <span v-for="author in data.data.attributes.authors.data">
          {{ author.attributes.firstName }} {{ author.attributes.lastName }}
      </span> 
    </p>
    <img :src="data.data.attributes.image.data.attributes.url" :alt="data.data.attributes.image.data.attributes.alternativeText" width="600"/>

    <div class="post-content">
      <p> 
        {{data.data.attributes.summary}}
      </p>
    </div>
    
  </div>

</template>

<script setup>

  const route = useRoute();

  const postId = route.params.id
  const API_URL = `https://mtm6407-headlesscms-backend.onrender.com/api/posts/${postId}?populate[image][fields][0]=url&populate[authors][fields][1]=firstName&populate[authors][fields][2]=lastName&populate[authors][fields][3]=email`

  const {data} = await useFetch(API_URL)
</script>

<style scoped>
span{
  margin-right:10px;
}

.post-content{
  max-width: 600px;
}


</style>