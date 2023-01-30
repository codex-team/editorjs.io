<template>
  <div
    class="header"
    :class="{
      'header--menu-opened': menuOpened
    }"
  >
    <LayoutCenterContainer
      class="header__container"
    >
      <a href="/" class="header__link header__link--logo">
        <img src="~/assets/logo.svg" alt="Editor.js logo">
        Editor.js
      </a>

      <div
        class="header__burger"
        @click="menuOpened = !menuOpened"
      >
        <span
          v-if="menuOpened"
          class="header__burger-icon"
        >
          <codex-icon name="IconCross" />
        </span>
        <span
          v-else
          class="header__burger-icon"
        >
          <codex-icon name="IconAlignJustify" />
        </span>
      </div>

      <div class="header__menu">
        <a target="_blank" href="/base-concepts" class="header__link" @click="$track(AnalyticEvent.DocumentationClicked)">
          Documentation
        </a>
        <a target="_blank" href="https://github.com/editor-js/awesome-editorjs" class="header__link" @click="$track(AnalyticEvent.AwesomePluginsClicked)">
          Awesome Plugins
        </a>
        <a target="_blank" href="https://digest.editorjs.io" class="header__link" @click="$track(AnalyticEvent.DigestClicked)">
          Digest
        </a>
        <a target="_blank" href="https://github.com/codex-team/editor.js" class="header__link" @click="$track(AnalyticEvent.GitHubClicked)">
          GitHub
        </a>
        <a target="_blank" href="http://opencollective.com/editorjs" class="header__link header__link--support" @click="$track(AnalyticEvent.SupportEditorJSClicked)">
          <codex-icon name="IconHeart" :size="20" class="aaa" />
          Support Editor.js
        </a>
      </div>
    </LayoutCenterContainer>
  </div>
</template>

<script setup lang="ts">
// import SvgLogo from '~/assets/logo.svg';
import AnalyticEvent from "~/utils/analytics";
/**
 * Flag stores header menu opening state on mobile devices
 */
const menuOpened = ref(false);
</script>

<style scoped lang="postcss">
.header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  font-size: 14px;
  letter-spacing: -0.15px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(13px);
  z-index: var(--z-header);

  @media --desktop {
    height: var(--layout-header-height);
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (--small-viewport) {
      padding-top: 10px;
      padding-bottom: 10px;
      flex-wrap: wrap;
      padding-right: 12px;
    }
  }

  &__menu {
    display: flex;
    align-items: center;

    @media (--small-viewport) {
      flex-basis: 100%;
      flex-direction: column;
      align-items: stretch;
      padding-bottom: 7px;

      display: none;
    }
  }

  &--menu-opened &__menu {
    @media (--small-viewport) {
      display: flex;
    }
  }

  &__burger {
    user-select: none;

    @media --desktop {
      display: none;
    }

    &-icon {
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: burger-in 200ms ease;
    }
  }

  &__link {
    display: inline-flex;
    text-decoration: none;
    color: inherit;
    padding: 6px 9px;
    border-radius: 8px;
    margin-left: 10px;
    line-height: 20px;
    font-weight: 500;
    white-space: nowrap;

    @media (--small-viewport) {
      margin-left: 0;
      margin-top: 10px;
    }

    ::v-deep(.cdx-icon) {
      margin-right: 4px;
    }

    @media (hover: hover) {
      &:hover {
        background: var(--color-background-hover);
      }
    }


    &--logo {
      margin-left: -9px;
      margin-right: auto;
      font-weight: 700;

      @media (--small-viewport) {
        margin-top: 0;
      }

      ::v-deep(img) {
        display: inline-flex;
        width: 24px;
        height: 24px;
        margin: -2px 8px -2px 0;
      }
    }

    &--support {
      position: relative;
      background: linear-gradient(270deg, #DF22CC 0%, #FE2070 100%);
      background-clip: text;
      color: #EE3683;
      box-shadow: 0 1px 2px rgba(235, 102, 166, 0.49);

      @media (hover: hover) {
        &:hover {
          background: transparent;
          box-shadow: 0 2px 3px rgba(235, 102, 166, 0.19);
          color: #fff;
          background: #fff;
          background-clip: text;
        }
      }

      &::before,
      &::after {
        content: '';
        position: absolute;
        z-index: -1;
      }

      &::before {
        background: linear-gradient(270deg, #E544FF 0%, #FF1F70 100%);
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        border-radius: 8px;
      }

      &::after {
        background: #FFF5F8;
        bottom: 1px;
        left: 1px;
        right: 1px;
        top: 1px;
        border-radius: 7px;
      }

      @media (hover: hover) {
        &:hover::after,
        &:hover::before {
          background: #FF2567;
        }
      }
    }
  }
}

@keyframes burger-in {
  from {
    transform: rotate(90deg);
  }

  to {
    transform: scale(1.2);
  }
}
</style>
