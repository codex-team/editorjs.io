<template>
  <div class="landing-header">
    <LayoutCenterContainer>
      <div class="landing-header__logo">
        <div class="landing-header__logo-pic">
          <SvgLogo alt="Editor.js shining logo" width="86" height="86" />
        </div>
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
        @click="$track(AnalyticEvent.GetStartedClicked)"
      />
      <UnfairAdvantages
        class="landing-header__ua"
      />
    </LayoutCenterContainer>
  </div>
</template>

<script setup lang="ts">
import SvgLogo from '~/assets/logo.svg';
import AnalyticEvent from "~/utils/analytics";
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

    &-pic {
      position: relative;

      svg {
        width: var(--logo-size);
        height: var(--logo-size);
      }

      &::before {
        content: '';
        position: absolute;

        --shadow-width: calc(var(--logo-size) * 0.8);

        width: var(--shadow-width);
        height: calc(var(--logo-size) * 0.3);
        background-color: rgba(0, 172, 255, 0.77);
        border-radius: 50%;
        top: calc(var(--logo-size) * 0.8);
        left: 50%;
        margin-left: calc(var(--shadow-width) / -2);
        filter: blur(8px);
      }
    }


    @media (hover: hover) {
      &-pic {
        will-change: transform;
        animation: attack 200ms 8000ms cubic-bezier(.97, 0,1,.05) forwards;
        animation-play-state: paused;

        svg {
          will-change: transform;
          animation: easter 500ms ease infinite;
          animation-play-state: paused;
        }

        &::before {
          will-change: transform, blur;
          animation: easter-shadow 500ms ease infinite;
          animation-play-state: paused;
        }

        &:hover,
        &:hover svg,
        &:hover::before {
          animation-play-state: running;
        }
      }
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
    max-width: 690px;
    letter-spacing: 0.38px;
    font-weight: 900;
  }

  &__description {
    margin: var(--sections-margin) auto;
    font-size: 16px;
    line-height: 22px;
    max-width: 470px;
    letter-spacing: -0.12px;
    color: var(--color-text-secondary);
    font-weight: 500;
  }

  &__ua {
    margin-top: var(--block-padding-vertical);
  }
}

@keyframes easter {
  0% {
    transform: none;
  }

  80% {
    transform: translateY(-20px);
  }

  90% {
    transform: scaleY(0.94);
  }

  100% {
    transform: none;
  }
}

@keyframes easter-shadow {
  0% {
    transform: none;
    filter: blur(5px);
  }

  80% {
    transform: translateY(-4px) scaleX(0.7);
    filter: blur(10px);
  }

  100% {
    transform: none;
    filter: blur(5px);
  }
}

@keyframes attack {
  from {
    transform: none;
  }

  99% {
    transform: scale(34) translateY(20px);
  }

  100% {
    opacity: 0;
  }
}
</style>
