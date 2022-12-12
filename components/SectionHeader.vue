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
    <div class="section-header__text" v-html="text"/>
  </div>
</template>

<style>
.section-header {
  &__title {
    font-size: 30px;
    line-height: 23px;
    font-weight: 600;
  }

  &__text {
    margin-top: 20px;
    font-size: 17px;
    line-height: 26px;
  }
}
</style>
