<template>
  <div class="container">
    <div class="row">
      <!-- Image column -->
      <div class="col-md-6">
        <img :src="data.data.attributes.image.data.attributes.url" :alt="data.data.attributes.image.data.attributes.alternativeText" class="img-fluid" width="600"/>
      </div>
      <!-- Content column -->
      <div class="col-md-6">
        <div class="post-single">
          <h2 class="header-title">{{ data.data.attributes.title }}</h2>
          <p>By: 
            <span v-for="(author, index) in data.data.attributes.authors.data" :key="index">
              {{ author.attributes.firstName }} {{ author.attributes.lastName }}
              <span v-if="index !== data.data.attributes.authors.data.length - 1">,</span>
            </span> 
          </p>
          <div class="post-content">
            <p>{{ data.data.attributes.content }}</p>
          </div>
        </div>
      </div>
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
.container {
  margin: 30px;
  margin-left: 60px;
}

/* Header style */
.header-title {
  color: #0b1957;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

/* Image style */
img {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
}

/* Post content style */
.post-content p {
  color: #555;
}
</style>