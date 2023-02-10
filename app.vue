<template>
  <LayoutHeader/>
  <LandingHeader/>
  <EditorOverview/>
  <SectionOutput />
  <Section>
    <SectionHeader
      title="API is the feature"
      text="Each Block is provided via a plugin. It's easy to create your own. Dozens of created. Same with Inline Formatting and Block Tunes."
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
      text="Editor.js is not just an editor. It is a large community of developers around the world creating new tools, integrations, building new products and features. And <b>we really need your star</b> to support the community's growth."
    />
    <Star/>
  </Section>
  <Section>
    <SectionHeader
      text="Thousands of people already write with us."
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
