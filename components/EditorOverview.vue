<template>
  <div class="overview">
    <LayoutCenterContainer>
      <div
        class="overview__canvas"
      >
        <div
          class="fake-input"
          contenteditable="true"
        ></div>
        <template v-if="demoEnabled === false">
          <img
            class="overview__canvas-pic1"
            src="~/assets/editor-1.jpg"
            alt="Editor.js showcase: the Toolbox and the Inline Toolbar"
            @click="pictureClicked"
          />
          <img
            class="overview__canvas-pic2"
            src="~/assets/editor-2.jpg"
            alt="Editor.js: the Image Tool"
            @click="pictureClicked"
          />
        </template>
        <LazyEditorDemo v-else :scroll-to-center="true"/>
        <UiButton
          v-if="demoEnabled === false"
          class="overview__demo-button"
          type="primary"
          icon="IconMarker"
          text="Play With Demo"
          ref="demoButton"
          @click="playDemoClicked"
        />
      </div>
    </LayoutCenterContainer>
  </div>
</template>

<script setup lang="ts">
import AnalyticEvent from "~/utils/analytics";
import { ref } from 'vue';

// declare a ref to hold the element reference
// the name must match template ref value
const demoButton = ref()

function pictureClicked() {
  (demoButton.value as {shake: Function}).shake();
}

/**
 * Flag responsible for Demo activation
 */
const demoEnabled = ref(false);

/**
 * Access the Analytics module
 */
const { $track } = useNuxtApp();

/**
 * Handler for the 'Play With Demo' button
 */
function playDemoClicked(){
  demoEnabled.value = true;

  const isMobile = window.matchMedia('(max-width: 710px)').matches;

  if (isMobile) {
    /**
     * Mobile browsers does not allow to programmatically set a caret to the
     * contenteditable element which is not presents on a page in a moment of button click
     *
     * So we use fake invisible input to focus it first, then change focus to our editor
     */
    (document.querySelector('.fake-input') as HTMLElement).focus();

    const block: HTMLElement | null = document.querySelector('.ce-paragraph');

    if (block !== null){

      block.focus()
    }
  }

  /**
   * Send analytics event
   */
  $track(AnalyticEvent.PlayWithDemoClicked)
}
</script>

<style lang="postcss">
.overview {
  --canvas-width: 840;
  --canvas-height: 1236;
  --canvas-width-px: calc(var(--canvas-width) * 1px);
  --canvas-padding-top: 60px;
  --canvas-radius: 20px;
  --canvas-offset-top: -70px;
  --canvas-offset-bottom: -100px;

  @media (--small-viewport) {
    --canvas-padding-top: 30px;
    --canvas-offset-top: -16px;
    --canvas-offset-bottom: -32px;
  }


  display: flex;
  flex-direction: column;
  background-color: var(--color-background-image-overview);

  &__canvas {
    margin: var(--canvas-offset-top) auto var(--canvas-offset-bottom);
    background-color: #fff;
    box-shadow: 0px -3px 29px -5px rgba(34, 39, 47, 0.14);
    max-width: var(--canvas-width-px);
    border-radius: var(--canvas-radius);
    padding-top: var(--canvas-padding-top);
    display: flex;
    flex-direction: column;
    
    /* aspect-ratio: var(--canvas-width) / var(--canvas-height); */

    &-pic1 {
      --left-margin: 36;
      --right-margin: 120;

      --left-margin-percents: calc(var(--left-margin) / var(--canvas-width) * 100%);
      --right-margin-percents: calc(var(--right-margin) / var(--canvas-width) * 100%);

      max-width: calc(100% - var(--left-margin-percents) - var(--right-margin-percents));
      margin-left: var(--left-margin-percents);
      margin-right: var(--right-margin-percents);
      aspect-ratio: 684 / 709;
    }

    &-pic2 {
      margin-top: 6px;
      width: 100%;
      aspect-ratio: var(--canvas-width) / 450;
      background: radial-gradient(120.67% 147.67% at 37.86% -9.67%, #1F1F1F 0%, #343434 59.51%, #1F1F1F 100%);
      border-radius: 0 0 var(--canvas-radius) var(--canvas-radius);
    }
  }

  &__demo-button {
    margin: -20px auto -18px;

    @media (--desktop) {
      position: sticky;
      bottom: 16px;
    }
  }
}

/**
 * Mobile browsers does not allow to programmatically set a caret to the
 * contenteditable element which is not presents on a page in a moment of button click
 *
 * So we use fake invisible input to focus it first, then change focus to our editor
 */
.fake-input {
  display: none;

  @media (--small-viewport) {
    display: block;
    position: absolute;
    font-size: 17px;
    opacity: 0.01;
    background-color: transparent;
  }
}
</style>
