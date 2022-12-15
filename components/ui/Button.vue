<template>
  <a
    target="_blank"
    :href="link"
    :class="{
      button: true,
      ['button--' + type]: true,
      'button--big': big
    }"
  >
    <div v-if="icon" v-html="icon" class="button__icon"/>
    <img v-if="iconPath" :src="iconPath" class="button__icon">
    {{ text }}
  </a>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * type of button
   */
  type: 'primary' | 'secondary',

  /**
   * Make button big
   */
  big?: boolean;

  /**
   * Make button small
   */
  small?: boolean;

  /**
   * icon for button
   */
  icon?: string,

  /**
   * icon for button
   */
  iconPath?: string,

  /**
   * Button text
   */
  text?: string,

  /**
   * Button link
   */
  link?: string,
}>()
</script>

<style lang="postcss" scoped>
.button {
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  cursor: pointer;
  user-select: none;

  font-size: 15px;
  line-height: 23px;
  font-weight: 500;
  padding: 6px 11px;
  border-radius: 9px;

  border: 1px solid var(--color-text-primary);
  color: var(--color-text-primary);

  &--small {
    padding: 5px 10px;
    border-radius: 8px;

    font-size: 13px;
  }

  &--big {
    padding: 14px 26px;
    border-radius: 10px;

    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.32px;
    font-weight: 700;
  }

  &--primary {
    background-color: var(--color-button-primary);
    border-color: var(--color-button-primary-border);
    box-shadow: 0 8px 25px rgba(28, 173, 255, 0.46);
    color: #fff;

    &:hover {
      background-color: var(--color-button-primary--hover);
      border-color: var(--color-button-primary-border--hover);
      transform: translateY(2px);
      transition: transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
      box-shadow: 0 5px 20px -3px rgba(28, 173, 255, 0.66);
    }
  }

  &__icon {
    margin-right: 7px;
  }
}
</style>
