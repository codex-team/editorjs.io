<template>
  <a :href="link" class="button" :class="{
    'button--support': type === 'support',
    'button--primary': type === 'primary',
  }">
    <img v-if="icon" :src="icon" class="button__icon"/>
    {{ text }}
  </a>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * type of button
   */
  type: 'support' | 'primary' | 'sponsor' | 'secondary',

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

<style scoped>
.button {
  display: flex;
  align-items: center;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 14px;
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
</style>
