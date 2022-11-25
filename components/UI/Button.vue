<template>
  <a :href="link" class="button" :class="{
    'button--support': type === 'support',
    'button--primary': type === 'primary',
    'button--demo': type === 'demo',
    'button--sponsor': type === 'sponsor',
    'button--secondary': type === 'secondary'
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
  user-select: none;

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

  @media (--small-viewport) {
    width: 30px;
    height: 30px;
    padding: 0;
    justify-content: center;
    .button__text {
      display: none;
    }

    .button__icon {
      margin-right: 0;
      align-self: center;
    }
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

.button--sponsor {
  padding: 7px 10px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  border-radius: 10px;
  background: linear-gradient(194.57deg, #6BB8FF 6.66%, #3B7CDF 88.43%);
  box-shadow: 0 2px 4px rgba(37, 123, 225, 0.32);
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
