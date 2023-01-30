<script setup lang="ts">
defineProps<{
  /**
   * The main label of the section
   */
  title?: String,

  /**
   * Description. Could contain HTML
   */
  text: String

  /**
   * Pass true to make text smaller
   */
  small?: Boolean,
}>()
</script>

<template>
  <div
    class="section-header"
    :class="{'section-header--small': small}"
  >
    <h2 class="section-header__title" v-if="title">{{ title }}</h2>
    <div class="section-header__text" v-html="text"/>
  </div>
</template>

<style lang="postcss">
.section-header {
  --title-size: 30px;
  --title-line-height: 23px;

  --text-size: 17px;
  --text-line-height: 26px;
  --text-margin: 20px;

  --text-size-small: 15px;
  --text-line-height-small: 22px;

  @media (--small-viewport) {
    --title-size: 24px;
    --title-line-height: 20px;

    --text-size: 15px;
    --text-line-height: 22px;
    --text-margin: 16px;

    --text-size-small: 13px;
    --text-line-height-small: 18px;
  }

  max-width: var(--layout-section-content-width);
  margin: 0 auto;

  &__title {
    font-size: var(--title-size);
    line-height: var(--title-line-height);
    font-weight: 700;
    letter-spacing: 0.1px;
  }

  &__text {
    margin-top: var(--text-margin);
    font-size: var(--text-size);
    line-height: var(--text-line-height);

    a {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid var(--color-text-primary)

    }
  }

  &--small &__text {
    font-size: var(--text-size-small);
    line-height: var(--text-line-height-small);
  }
}
</style>
