<template>
  <a
    target="_blank"
    :href="link"
    :class="{
      button: true,
      ['button--' + type]: true,
      'button--big': big
    }"
    ref="button"
  >
    <CodexIcon
      :name="icon"
      v-if="icon"
    />
    <img
      v-if="iconPath"
      :src="iconPath"
    >
    {{ text }}
  </a>
</template>

<script setup lang="ts">
import type { CodexIconName } from '@codexteam/nuxt-icons';

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
   * Name of the icon from CodeX Icons
   */
  icon?: CodexIconName,

  /**
   * icon for button
   * @deprecated
   */
  iconPath?: string,

  /**
   * Button text
   */
  text: string,

  /**
   * Button link
   */
  link?: string,
}>()

// declare a ref to hold the element reference
// the name must match template ref value
const button = ref<Element>()

defineExpose({
  shake(){
    button.value?.classList.add('shake')

    setTimeout(() => {
      button.value?.classList.remove('shake')
    }, 500);
  }
})
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
    border-radius: 13px;

    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.32px;
    font-weight: 700;

    ::v-deep(svg),
    ::v-deep(img) {
      width: 28px;
      height: 28px;
    }
  }

  &--primary {
    background-color: var(--color-button-primary);
    border-color: var(--color-button-primary-border);
    box-shadow: 0 8px 25px rgba(28, 173, 255, 0.46);
    color: #fff;
    font-weight: 600;

    &:hover {
      background-color: var(--color-button-primary--hover);
      border-color: var(--color-button-primary-border--hover);
      transform: translateY(2px);
      transition: transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
      box-shadow: 0 5px 20px -3px rgba(28, 173, 255, 0.66);
    }
  }

  ::v-deep(svg),
  ::v-deep(img) {
    margin-right: 0.3em;
    margin-left: -0.1em;
  }


  &.shake {
    animation: tilt-n-move-shaking 300ms ease;
  }
}


@keyframes tilt-n-move-shaking {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, 5px) rotate(5deg); }
  50% { transform: translate(0, 0) rotate(0eg); }
  75% { transform: translate(-5px, 5px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}
</style>
