<template>
  <section class="section" :class="{
    'section--output': type === 'output',
  }">
    <slot/>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * type of section
   */
  type?: 'output',

}>()
</script>

<style>
.section {
  padding: 100px 0;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > * {
    max-width: 560px;
  }

  &--output {
    padding-top: 280px;
    background-color: #E5F3FF;
    padding-bottom: 0;
  }
}
</style>
