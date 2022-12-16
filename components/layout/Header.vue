<template>
  <div class="header">
    <div class="header__container">
      <a href="/" class="header__logo"><EditorLogo size="small"/></a>
      <div class="menu">
        <a target="_blank" href="https://editorjs.io/getting-started" class="menu__link" v-on:click="onClick('Documentation')">Documentation</a>
        <a target="_blank" href="https://github.com/editor-js/awesome-editorjs" class="menu__link" v-on:click="onClick('Awesome Plugins')">Awesome Plugins</a>
        <a target="_blank" href="https://digest.editorjs.io" class="menu__link" v-on:click="onClick('Digest')">Digest</a>
        <a target="_blank" href="https://github.com/codex-team/editor.js" class="menu__link" v-on:click="onClick('GitHub')">GitHub</a>
        <a target="_blank" href="http://opencollective.com/editorjs" class="menu__button" v-on:click="onClick('Support')">
          <img :src="starIcon" class="menu__button__icon">
          <p class="menu__button__text">Support Editor.js</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.menu {
  max-width: 560px;
  width: 100%;
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  font-size: 14px;

  @media (--small-viewport) {
    max-width: 980px;
    padding-left: 5px;
    padding-right: 5px;
  }

  &__link {
    color: var(--color-text-primary);
    text-decoration: none;
    padding: 9px 6px;
    font-weight: 500;
    white-space: nowrap;
    @media (--small-viewport) {
      padding: 20px 0;
    }
  }

  &__button {
    text-decoration: none;
    display: flex;
    align-items: center;
    border: 0;
    color: white;
    cursor: pointer;
    font-size: 14px;
    user-select: none;
    background: linear-gradient(270deg, #E858FF 0%, #9B42F3 82.81%);
    border-radius: 8px;
    padding: 4px 11px;
    font-weight: 500;

    &__icon {
      width: 12px;
      height: 12px;
      margin-right: 7px;
    }

    @media (--small-viewport) {
      position: absolute;
      right: var(--layout-offset-x);
      top: 23px
    }
  }
}

.header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &__logo {
    text-decoration: none;
    cursor: pointer;
  }

  &__container {
    display: flex;
    max-width: var(--layout-container-width);
    width: 100%;
    padding: 0 20px 0 20px;
    justify-content: space-between;
    align-items: center;
  }

  @media (--small-viewport) {
    height: 100px;
    padding: 5px;

    &__container {
      padding: 20px 0 20px 0;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
<script setup lang="ts">
import EditorLogo from "../EditorLogo";
import starIcon from "~/assets/star.svg";

defineProps<{
  /**
   * Callback for click events in this component
   */
  onClick: (buttonText: string) => void,
}>()
</script>
