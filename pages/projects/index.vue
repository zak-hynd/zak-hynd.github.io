<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/projects').find()
)
</script>

<template>
  <h1 class="text-3xl my-8">Projectios</h1>

  This will be a page that lists projects that I want to talk about...

  `something code?`
  

  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <Post :posts="posts" />
  </section>
</template>