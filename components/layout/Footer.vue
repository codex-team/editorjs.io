<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__license">
        Copyright © 2022 <a href="//codex.so">CodeX</a><br>
        Released under <a href="https://github.com/codex-team/editor.js/blob/next/LICENSE" target="_blank"><span class="footer__license__apache">the Apache 2 License</span></a>
      </div>
      <UiButton link="mailto:team@codex.so" text="Contact us" type="secondary" class="footer__contact"/>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.footer {
  border-top: var(--color-line) solid 1px;
  padding: 20px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    @media (--small-viewport) {
      padding-right: var(--layout-offset-x);
      padding-left: var(--layout-offset-x);
    }
    max-width: var(--layout-container-width);
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__license {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;

    &__apache {
      font-weight: 700;
    }

    & > a {
      text-decoration: none;
      color: var(--color-text-primary);
    }
  }

  &__contact {

  }
}
</style>
