<template>
  <div class="section-output">
    <Section>
      <SectionHeader
        title="Clean JSON Output"
        text="Use it across Web, iOS, Android, Chat bots, RSS, AMP/IA, speech readers — everywhere. Easy to sanitize, extend and integrate with your logic. <b>Developers will thank you</b>"
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
