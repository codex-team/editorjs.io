<template>
  <div class="landing-header">
    <div class="landing-header__logo">
      <SvgLogo alt="Editor.js shining logo" width="86" height="86" />
      <div class="landing-header__logo-title">
        Editor.js
      </div>
    </div>

    <div class="landing-header__title">
      Free block-style editor with a universal JSON output
    </div>
    <div class="landing-header__description">
      Editor.js provides maximum power for developers and products staying focused on the end-user experience
    </div>
    <UiButton
      type="primary"
      big
      text="Get Started"
      link="https://editorjs.io/getting-started"
    />
    <UnfairAdvantages :class="'landing-header__ua'"/>
  </div>
</template>

<script setup lang="ts">
import SvgLogo from '~/assets/logo.svg';

</script>

<style lang="postcss">
.landing-header {
  padding: 110px var(--layout-offset-x) 0 var(--layout-offset-x);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &__logo {
    --logo-size: 86px;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width: var(--logo-size);
      height: var(--logo-size);
    }

    &::before {
      content: '';
      position: absolute;
      width: var(--logo-size);
      height: var(--logo-size);
      box-shadow: 0 16px 18px -7px rgba(0, 172, 255, 0.77);
      border-radius: 50%;
    }

    &-title {
      margin-top: 20px;
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 0.1px;
      line-height: 48px;
    }
  }

  &__title {
    line-height: 50px;
    margin-top: 56px;
    font-size: 47px;
    max-width: 680px;
    letter-spacing: 0.38px;
    font-weight: 900;
  }

  &__description {
    margin: 56px auto;
    font-size: 16px;
    line-height: 22px;
    max-width: 460px;
    letter-spacing: -0.32px;
    color: var(--color-text-secondary);
    font-weight: 500;
  }

  &__ua {
    margin-top: 110px;
    margin-bottom: 130px;
  }
}
</style>
