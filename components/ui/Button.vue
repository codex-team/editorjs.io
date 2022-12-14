<template>
  <a target="_blank" :href="link" :class="['button', `button--${type}`]" v-on:click="onClick(text)">
    <div v-if="icon" v-html="icon" class="button__icon"/>
    <img v-if="iconPath" :src="iconPath" class="button__icon">
    <p class="button__text">{{ text }}</p>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * Callback for click events in this component
   */
  onClick: (buttonText: string) => void,

  /**
   * type of button
   */
  type: 'primary' | 'secondary',

  /**
   * icon for button
   */
  icon?: String,

  /**
   * icon for button
   */
  iconPath?: String,

  /**
   * Button text
   */
  text?: String,

  /**
   * Button link
   */
  link?: String,
}>()
</script>

<style lang="postcss" scoped>
.button {
  text-decoration: none;
  display: flex;
  align-items: center;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 14px;
  user-select: none;

  &__text {
    align-self: center;
    text-align: center;
  }
}

.button--primary {
  background-color: var(--color-button-primary);
  box-shadow: 0 8px 25px rgba(28, 173, 255, 0.46);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  padding: 9px 14px;

  .button__icon {
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.button--secondary {
  border: 1px solid var(--color-text-primary);
  border-radius: 9px;
  padding: 6px 11px;

  .button__text {
    color: var(--color-text-primary);
    font-weight: 500;
    font-size: 15px;
  }
}
</style>
