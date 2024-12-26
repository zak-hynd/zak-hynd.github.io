<script setup>
    const { data: posts } = await useAsyncData('posts', () =>
        queryContent('/projects').find()
    )
</script>

<template>
    <section>
    <h1 class="text-5xl font-bold mt-20">{zak-hynd}</h1>
    <p class="text-base text-gray-900 p-2 italic">PO/PM | Geo | Dev/QA</p>
  </section>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">Content</h2>
      <p class="text-lg py-2">
        This home page will likely have some hardcoded stuff that I want to showcase. And perhaps a mention to go to the about and projects pages for more stuff
      </p>
    </div>
  </section>
</template>