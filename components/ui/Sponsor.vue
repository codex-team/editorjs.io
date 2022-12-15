<template>
  <a target="_blank" class="sponsor_button" :href="link">
    <p class="sponsor_button__text">{{ text }}</p>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * Button text
   */
  text: string,

  /**
   * Button link
   */
  link: string,
}>()
</script>

<style>
.sponsor_button {
  text-decoration: none;
  display: flex;
  align-items: center;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  padding: 7px 10px;
  font-weight: 700;
  border-radius: 10px;
  background: linear-gradient(194.57deg, #6BB8FF 6.66%, #3B7CDF 88.43%);
  box-shadow: 0 2px 4px rgba(37, 123, 225, 0.32);
}
</style>
