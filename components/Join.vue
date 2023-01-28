<template>
  <div class="codex">
    <IconCodex alt="CodeX logo" />
    <SectionHeader
      title="Join us"
      :text="text"
      :small="true"
    />
    <UiButton
      link="//codex.so/join?from=editorjs-join-button"
      text="Join CodeX"
      type="secondary"
      class="codex__link"
      @click="$track(AnalyticEvent.JoinClicked)"
    />
  </div>

</template>

<script setup lang="ts">
import IconCodex from '~/assets/codex_logo.svg';
import AnalyticEvent from "~/utils/analytics";

const text = `Editor.js is made by <a href="https://codex.so?from=editorjs-join" target="_blank">CodeX</a> — a non-profit team of passionate talents around the world interested in making high-quality open-source products. We're open to people who want to constantly improve their skills and grow professionally with experiments in cutting-edge technologies.`;
</script>

<style scoped lang="postcss">
.codex {
  padding: 100px 0;
  border-top: 1px solid var(--color-line);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    margin-bottom: 20px;
  }

  &__link {
    margin-top: 20px;
  }
}
</style>
