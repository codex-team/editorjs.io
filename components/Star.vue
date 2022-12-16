<template>
  <div class="star">
    <div class="star__arrows-line">
      <img src="~/assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
      <img src="~/assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
    </div>
    <div class="star__arrows-line star__arrows-line--left">
      <img src="~/assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
      <img src="~/assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
    </div>
    <div class="star__arrows-line star__arrows-line--right">
      <img src="~/assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
      <img src="~/assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
    </div>
    <a href="https://github.com/codex-team/editor.js" class="star__button" target="_blank" v-on:click="onClick('Star')">
      <div v-html="IconStar" class="star__button__icon"/>
      <div class="star__button__text">
        Star
      </div>
      <div class="star__button__count">
        19.5k
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { IconStar } from "@codexteam/icons";

defineProps<{
  /**
   * Callback for click events in this component
   */
  onClick: (buttonText: string) => void,
}>()
</script>

<style lang="postcss">
.star {
  margin-top: 30px;
  width: 200px;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &__button {
    text-decoration: none;
    color: var(--color-text-primary);
    z-index: 1;
    cursor: pointer;
    padding: 9px 9px 9px 12px;
    display: flex;
    align-items: center;
    background: linear-gradient(239.67deg, #FCFCFC 18.14%, #F9F9F9 77.61%);
    border: 1px solid #E1E1E1;
    border-radius: 11px;
    width: 160px;
    height: 53px;
    font-weight: 700;
    font-size: 18px;

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }

    &__count {
      background-color: rgba(0, 0, 0, 4%);
      border-radius: 32px;
      padding: 6px 11px;
      margin-left: auto;
    }
  }

  &__arrows-line {
    margin: 0;
    position: absolute;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: moveArrows 0.8s linear infinite alternate;

    &__arrow {
      height: 20px;
    }

    &__arrow:last-child {
      transform: rotate(180deg);
    }

    &--left {
      transform: rotate(70deg);
      writing-mode: horizontal-tb;
      height: 130%;
    }

    &--right {
      transform: rotate(-70deg);
      writing-mode: horizontal-tb;
      height: 130%;
    }
  }
}

@keyframes moveArrows {
  from {
    padding-top: 0;
    padding-bottom: 0;
  }

  to {
    padding-top: 25%;
    padding-bottom: 25%;
  }
}
</style>
