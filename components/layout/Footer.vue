<template>
  <div class="footer">
    <LayoutCenterContainer class="footer__container">
      <div class="footer__license">
        Copyright © {{ currentYear }} <a href="https://codex.so">CodeX</a><br>
        Released under <a href="https://github.com/codex-team/editor.js/blob/next/LICENSE" target="_blank">the Apache 2 License</a>
      </div>
      <UiButton link="mailto:team@codex.so" text="Contact us" type="secondary" class="footer__contact"/>
    </LayoutCenterContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped lang="postcss">
.footer {
  border-top: var(--color-line) solid 1px;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &__license {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;

    @media (--small-viewport) {
      flex-basis: 100%;
      margin-bottom: 15px;
    }

    a {
      font-weight: 700;
      text-decoration: none;
      color: var(--color-text-primary);
    }
  }
}
</style>
