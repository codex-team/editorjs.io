<script setup lang="ts">
defineProps<{
  /**
   * The main label of the section
   */
  title: String,

  /**
   * Description. Could contain HTML
   */
  text: String
}>()
</script>

<template>
  <div class="section-header">
    <h2 class="section-header__title"> {{ title }}</h2>
    <div class="section-header__text"> {{ text }}</div>
  </div>
</template>

<style>
.section-header {
  &__title {
  }

  &__text {
  }
}
</style>
