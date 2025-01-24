<template>
  <div class="section-output">
    <Section>
      <SectionHeader
        title="Clean JSON Output"
        text="Versatile and developer-friendly. Use it seamlessly across Web, iOS, Android, AMP, Instant Articles, speech readers, and more. Easy to sanitize, extend, and integrate with your logic."
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

    --vertical-padding: 100px;

    @media (--small-viewport) {
      --vertical-padding: 40px;
    }

    &__header {
      padding: var(--vertical-padding) 0;

      @media (--small-viewport) {
        margin-top: 30px;
      }
    }
  }
</style>
