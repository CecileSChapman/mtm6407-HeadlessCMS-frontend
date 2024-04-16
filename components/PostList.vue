<template>
      <h1 style="color: #EC6DBD; margin-left: 70px;">Epic Reviews</h1>
 <div class="postlist-container container d-flex gap-4">
    <div v-for="post in posts.data">       

        <div class="post-card card" style="width: 19rem; border: solid 3px #EC6DBD; border-radius: 8px;">
            <img class="card-img-top postlist-img img-fluid" :src="post.attributes.image.data.attributes.url" :alt="post.attributes.title">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{post.attributes.title}}</h5>
                <p class="card-text">{{ post.attributes.summary }}</p>
                <RouterLink :to="BASE_URL + post.id">
                    <a href="#" class="btn btn-primary align-self-start mt-auto">Read</a>
                </RouterLink>
        </div>
</div>
       

    </div>
 </div>

</template>

<script setup>

const BASE_URL = '/posts/'

defineProps({
    posts: Object
})

</script>

<style scoped>

/* .card-body {
    height: 300px;
} */

    .card-body p {
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    width: fit-content;
    display: -webkit-box;
   -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 2;
   -webkit-box-orient: vertical;
    }

    .post-card {
        height: 440px;
    }

    .postlist-img {
        max-width: 385px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Inter', 'sans-serif';
    }

</style>