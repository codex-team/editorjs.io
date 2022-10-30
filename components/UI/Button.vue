<template>
  <a :href="link" class="button" :class="{
    'button--support': type === 'support',
    'button--primary': type === 'primary',
    'button--demo': type === 'demo'
  }">
    <img v-if="icon" :src="icon" class="button__icon"/>
    <p class="button__text">{{ text }}</p>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * type of button
   */
  type: 'support' | 'primary' | 'sponsor' | 'secondary' | 'demo',

  /**
   * icon for button
   */
  icon?: String,

  /**
   * Button text
   */
  text: String,

  /**
   * Button link
   */
  link?: String,
}>()
</script>

<style lang="postcss" scoped>
.button {
  display: flex;
  align-items: center;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 14px;

  &__text {
    align-self: center;
    text-align: center;
  }
}

.button--support {
  background: linear-gradient(270deg, #E858FF 0%, #9B42F3 82.81%);
  border-radius: 8px;
  padding: 4px 11px;

  .button__icon {
    width: 12px;
    height: 12px;
    margin-right: 7px;
  }
}

.button--primary {
  background-color: var(--color-button-primary);
  box-shadow: 0 8px 25px rgba(28, 173, 255, 0.46);
  border-radius: 10px;
  padding: 11px 26px;
  font-weight: 700;
  font-size: 16px;
}

.button--demo {
  background-color: var(--color-button-primary);
  box-shadow: 0 8px 25px rgba(28, 173, 255, 0.46);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  padding: 9px 14px;

  .button__icon {
    margin-right: 8px;
  }
}
</style>
