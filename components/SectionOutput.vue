<template>
  <div class="section-output">
    <Section>
      <SectionHeader
        title="Clean JSON Output"
        text="Use it in Web, iOS, Android, AMP, Instant Articles, speech readers — everywhere. Easy to sanitize, extend and integrate with your logic. <b>Developers will thank you</b>."
        class="section-output__header"
      />
      <SectionOutputCode />
    </Section>
  </div>
</template>

<style lang="postcss">
  .section-output {
    background-color: var(--color-background-output);
    margin: var(--canvas-offset-bottom) 0;

    &__header {
      @media (--small-viewport) {
        margin-top: 30px;
      }
    }
  }
</style>
