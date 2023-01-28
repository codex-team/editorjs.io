<template>
  <div class="become-sponsor">
    <SvgGift
      class="become-sponsor__icon"
      aria-hidden="true"
    />
    <div class="become-sponsor__title">
      Become a sponsor
    </div>
    <div class="become-sponsor__buttons">
      <UiButton
        type="primary"
        small
        link="https://opencollective.com/editorjs/contribute/backer-8632/checkout?interval=month&amount=2&name=&legalName=&email="
        text="$2 / mo"
      />
      <UiButton
        type="primary"
        small
        link="https://opencollective.com/editorjs/contribute/backer-8632/checkout?interval=month&amount=10&name=&legalName=&email="
        text="$10 / mo"
      />
      <UiButton
        type="primary"
        small
        link="https://opencollective.com/editorjs/donate"
        text="One-time"
      />
    </div>
    <a
      href="https://codex.so/donate"
      class="become-sponsor__more"
      target="_blank"
    >
      More options
    </a>
  </div>
</template>

<script setup lang="ts">
import SvgGift from '~/assets/gift.svg';
</script>

<style lang="postcss">
@import url('~/assets/styles/mixins.pcss');

.become-sponsor {
  display: inline-flex;
  padding: 32px 36px;

  flex-direction: column;
  align-items: center;
  margin: 80px auto 0;
  background-color: #F3FBFD;
  border-radius: 20px;

  @media (max-width: 375px){
    padding: 16px 20px;
  }

  .button {
    @apply --squircle;

    @media (max-width: 350px){
      font-size: 12px;
    }
  }

  &__icon {
    margin-top: 5px;
  }

  &__title {
    margin-top: 3px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
  }

  &__buttons {
    margin-top: 16px;
    align-items: center;
    display: flex;
    gap: 10px;
  }

  &__more {
    color: #6A7F8F;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 16px;

    &:hover {
      color: #2B3944;
    }
  }
}
</style>
