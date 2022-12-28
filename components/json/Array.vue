<template>
  <span
    class="json-array"
  >
    [
      <JsonLine v-for="item in value">
        <Json
          :value="item"
        />,
      </JsonLine>
    ]
  </span>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * JSON value to render
   */
  value: Array<string | number | boolean>;
}>();
</script>
