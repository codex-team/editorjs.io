<template>
  <span class="json-object">
    {
    <JsonLine
      v-for="(value, key) of object"
    >
      <span class="json-object__key">{{ key }}</span>: <Json :value="value" :type="key" />,
    </JsonLine>
    }
  </span>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * JSON value to render
   */
  object: object;
}>();
</script>

<style lang="postcss">
.json-object {
  &__key {
  }
}
</style>
