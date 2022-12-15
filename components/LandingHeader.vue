<template>
  <div class="landing-header">
    <LayoutCenterContainer>
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
        link="/getting-started"
      />
      <UnfairAdvantages
        class="landing-header__ua"
      />
    </LayoutCenterContainer>
  </div>
</template>

<script setup lang="ts">
import SvgLogo from '~/assets/logo.svg';

</script>

<style lang="postcss">
.landing-header {
  --block-padding-vertical: 110px;

  --logo-size: 86px;
  --logo-text-size: 40px;
  --logo-text-margin: 22px;

  --logo-title-size: 47px;
  --logo-title-line-hight: 50px;

  --sections-margin: 56px;


  @media (--small-viewport) {
    --block-padding-vertical: 50px;

    --logo-size: 60px;
    --logo-text-size: 22px;
    --logo-text-margin: 10px;

    --logo-title-size: 22px;
    --logo-title-line-hight: 26px;

    --sections-margin: 20px;
  }


  padding: var(--block-padding-vertical) var(--layout-offset-x) calc(var(--block-padding-vertical) + 10px);
  text-align: center;

  &__logo {
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
      margin-top: var(--logo-text-margin);
      font-size: var(--logo-text-size);
      font-weight: 700;
      letter-spacing: 0.1px;
      line-height: 48px;
    }
  }

  &__title {
    line-height: var(--logo-title-line-hight);
    margin: var(--sections-margin) auto 0;
    font-size: var(--logo-title-size);
    max-width: 680px;
    letter-spacing: 0.38px;
    font-weight: 900;
  }

  &__description {
    margin: var(--sections-margin) auto;
    font-size: 16px;
    line-height: 22px;
    max-width: 460px;
    letter-spacing: -0.32px;
    color: var(--color-text-secondary);
    font-weight: 500;
  }

  &__ua {
    margin-top: 110px;
  }
}
</style>
