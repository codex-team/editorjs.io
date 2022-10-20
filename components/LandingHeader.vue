<template>
  <div class="landing-header">
    <EditorLogo size="general" :class="'landing-header__editor-logo'"/>
    <div class="landing-header__title">
      Free block-style editor with a universal JSON output
    </div>
    <div class="landing-header__description">
      Editor.js provides maximum power for developers and products staying focused on the end-user experience
    </div>
    <Button type="primary" text="Get Started"/>
    <UnfairAdvantages :class="'landing-header__ua'"/>
  </div>
</template>

<style>
.landing-header {
  background: linear-gradient(180deg, var(--color-background-secondary) 0%, white 98%);
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__description {
    margin-top: 56px;
    margin-bottom: 56px;
    max-width: 460px;
    line-height: 130%;
    width: 100%;
    font-size: 16px;
    color: var(--color-text-secondary);
    text-align: center;
  }

  &__title {
    line-height: 100%;
    margin-top: 56px;
    text-align: center;
    font-size: 47px;
    max-width: 651px;
    width: 100%;
    font-weight: 800;
  }

  &__ua {
    margin-top: 85px;
    margin-bottom: 130px;
  }
}
</style>
<script>
import Button from "./UI/Button";
export default {
  components: {Button}
}
</script>
