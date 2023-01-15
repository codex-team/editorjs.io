<template>
  <div class="codex">
    <IconCodex alt="CodeX logo" />
    <h2 class="codex__title">
      Join us
    </h2>
    <div class="codex__text">
      Editor.js made by <a href="https://codex.so?from=editorjs-join" class="codex__text__link" target="_blank">CodeX</a> — the non-profit team of passionate talents around the world interested in making high-quality open-source products. We are open to young people who want to constantly improve their skills and grow professionally with experiments in cutting-edge technologies.
    </div>
    <UiButton link="//codex.so/join?from=editorjs-join-button" text="Join CodeX" type="secondary" class="codex__link" @click="$track(AnalyticEvent.JoinClicked)"/>
  </div>

</template>

<script setup lang="ts">
import IconCodex from '~/assets/codex_logo.svg';
import AnalyticEvent from "~/utils/analytics";
</script>

<style scoped lang="postcss">
.codex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;

  &__title {
    margin: 0;
    padding: 0;
  }

  &__text {

    &__link {
      color: var(--color-text-primary);
    }
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
  }

  &__link {
    margin-top: 15px;
  }
}
</style>
