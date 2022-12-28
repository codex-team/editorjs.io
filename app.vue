<template>
  <LayoutHeader/>
  <LandingHeader/>
  <OverviewImage/>
  <SectionOutput />
  <Section>
    <SectionHeader
      title="API is the feature"
      text="Each Block is provided via a plugin. It's easy to create your own. Dozens of created. Same with Inline Formatting and Block Tunes."
    />
    <img src="~/assets/api.jpg" alt="API" class="api-image">
  </Section>
  <Section>
    <SectionHeader
      title="Sponsors"
      text="For the evolution of Editor.js, we need your help. Become a sponsor by subscribing to a donation and supporting product development."
    />
    <BecomeASponsor/>
  </Section>
  <Section>
    <SectionHeader
      title="Global WYSIWYG ecosystem"
      text="Editor.js is not just an editor. It is the large community of developers around the world creating new tools, integrations, building new products and features. And <b>we really need your star</b> to support the community growth."
    />
    <Star/>
  </Section>
  <Section>
    <SectionHeader
      title="Loved by"
      text="Thousands of people already write with us."
    />
    <LovedBy />
  </Section>
  <Section>
    <Join/>
  </Section>
  <LayoutFooter />
</template>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(180deg, #F1F8FF 0%, #fff 100%);
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
}

.api-image {
  max-width: 715px;
  width: 100%;
  margin-top: 40px;

  @media (--small-viewport) {
    max-width: 400px;
  }
}
</style>
