<template>
  <span
    class="json-value"
    :class="{
      [`json-value--${typeof value}`]: true,
      [`json-value--${type}`]: type !== undefined,
      [`json-value--highlighted`]: isHighLighted,
    }"
  >
    {{ valueToDisplay }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  /**
   * JSON value to render
   */
  value: string | number | boolean;

  /**
   * Modifier for specifying some style
   */
  type?: string;
}>();

/**
 * Adds double quotes if value is string
 */
const valueToDisplay = computed(() => {
  const isString = typeof props.value === 'string'

  return isString ? `"${props.value}"` : props.value;
})

/**
 * Returns true if value is a plugin name. It will be highlighted.
 */
const isHighLighted = computed(() => {
  if (typeof props.value !== 'string'){
    return false;
  }

  return [
    'paragraph',
    'header',
    'list',
    'image',
    'attaches'
  ].includes(props.value);
})
</script>

<style lang="postcss">
.json-value {
  &--number {
    color: #757994;
  }
  &--string {
    color: #5b6fa3;
  }
  &--boolean {
    color: #b562bd;
  }

  &--highlighted {
    color: #d60071;
  }
}
</style>
