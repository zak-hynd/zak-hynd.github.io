<script setup>
const { data: projs } = await useAsyncData('projs', () =>
  queryContent('/projects').find()
)
</script>

<template>
  <h1 class="text-3xl my-8">Projects</h1>
  <section>
    This page should auto-list some cards for project pages I have written as markdown files
  </section>
  
  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <Post :posts="projs" />
  </section>
</template>