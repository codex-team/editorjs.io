<template>
  <LayoutHeader/>
  <LandingHeader/>
  <EditorOverview/>
  <SectionOutput />
  <Section>
    <SectionHeader
      title="API-Driven Flexibility"
      text="Every block is powered by plugins—easy to create and customize. Explore dozens of ready-made options for blocks, inline formatting, and block tunes."
    />
    <ApiImage />
  </Section>
  <Section>
    <SectionHeader
      title="Sponsors"
      text="Editor.js is free and open source. If you rely on it, you may be interested in supporting its maintenance and evolution."
    />
    <SponsorsList />
    <SponsorsBecome />
  </Section>
  <Section>
    <SectionHeader
      title="Global WYSIWYG ecosystem"
      text="Editor.js is more than just an editor—it is a thriving global community of developers building tools, integrations, and innovative features. <b>Support our growth by giving us a star!</b>"
    />
    <Star/>
  </Section>
  <Section>
    <SectionHeader
      text="Trusted by thousands worldwide."
    />
    <LovedBy />
  </Section>
  <Section :no-paddings="true">
    <Join/>
  </Section>
  <LayoutFooter />
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

useServerSeoMeta({
  title: 'Editor.js',
  ogTitle: 'Editor.js',
  description: 'Free block-style editor with a universal JSON output',
  ogDescription: 'Free block-style editor with a universal JSON output',
  ogImage: config.baseUrl + '/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(180deg, #F1F8FF 0%, #fff 100%);
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
}
</style>
