<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <!-- Header on the left -->
          <h1 class="header-title">Munch, Match, and Melody</h1>
        </div>
        <!-- <div class="col-md-6"> -->
        <!-- Search input on the right -->
            <!-- <input type="text" v-model="searchQuery" placeholder="Search reviews..." class="form-control">
        </div> -->
      </div>
  
      <!-- Card grid -->
      <div class="row mt-4">
        <div v-for="post in posts.data" :key="post.id" class="col-md-4">
          <div class="card mb-4">
            <img class="card-img-top" :src="post.attributes.image?.data?.attributes?.url" :alt="post.attributes.title">
            <div class="card-body">
              <h5 class="card-title">{{ post.attributes.title }}</h5>
              <p class="card-text">{{ post.attributes.summary }}</p>
              <!-- Using RouterLink for navigation -->
              <RouterLink :to="`${BASE_URL}${post.id}`" class="btn btn-primary">Read More</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  const BASE_URL = '/posts/'
  
  defineProps({
      posts: Object
  });
  

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
  font-weight: bold;
  margin-bottom: 1.5rem;
}

/* Card style */
.card {
  border: solid 3px #f5664c;
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  max-height: 300px;
  object-fit: cover;
}

.card-body {
  padding: 1.5rem;
  background-color: white;
}

.card-title {
  color: #f5664c;
  font-weight: bold;
}

.card-text {
  color: #555;
}

.btn-primary {
  background-color: #Ea9f3d;
  border: none;
}

.btn-primary:hover {
  background-color: #f681cb;
}
</style>