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
      <h2 class="text-3xl font-bold mt-8">___</h2>
      <p class="text-lg py-2">
        I've swapped out my original site for this Nuxt 3 thing - I'm still in the process of wrangling the content and styling into this new framework... bare with.
        <br/>
        <br/>
        This home page will likely have some hardcoded stuff that I want to showcase. And perhaps a mention to go to the about and projects pages for more stuff
      </p>
      <br/>

      <h2>To do:</h2>
      <ul>
        <li>card with no-image</li>
        <li>yeet/hide hello-world thing</li>
        <li>colourscheme</li>
        <li>page layout</li>
        <li>typefont</li>
        <li>heading styles</li>
        <li>Conway's deploy & link</li>
        <li>better screenshots for projects</li>
        <li>priority sorting on projects page</li>
        <li>social links in header</li>
        <li>footer</li>
        <li>update favicon</li>
        <li>add more projects? do I care?</li>
        <li>update about page</li>
      </ul>
    </div>
  </section>
</template>