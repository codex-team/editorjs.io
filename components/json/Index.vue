<template>
  <span
    class="json"
    :class="{
      [`json--${type}`]: type !== undefined
    }"
  >
    <JsonValue
      v-if="['string', 'number', 'boolean'].includes(typeof value)"
      :value="(value as string | number | boolean)"
      :type="type"
    />
    <JsonArray
      v-else-if="Array.isArray(value)"
      :value="(value as Array<string | number | boolean>)"
    />
    <JsonObject
      v-else-if="(typeof value === 'object')"
      :object="value"
    />
  </span>
</template>

<script setup lang="ts">
type JsonItemValue = number | string | boolean | object | Array<JsonItemValue>;

defineProps<{
  /**
   * JSON value to render
   */
  value: JsonItemValue;

  /**
   * Modifier for specifying some style
   */
  type?: string;
}>();
</script>

<style lang="postcss">
.json {
  --color-text-code: #080F18;
  --text-size: 15px;
  --text-line-height: 26px;

  @media (--small-viewport) {
    --text-size: 13px;
    --text-line-height: 22px;
  }


  max-width: var(--layout-section-content-width);
  margin: 0 auto;
  text-align: left;

  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-size);
  line-height: var(--text-line-height);
  color: var(--color-text-code);

  &--data .json-object__key {
    color: rgb(83, 89, 94)
  }
}
</style>
