<template>
  <div class="landing-header">
    <EditorLogo size="general" :class="'landing-header__editor-logo'"/>
    <div class="landing-header__title">
      Free block-style editor with a universal JSON output
    </div>
    <div class="landing-header__description">
      Editor.js provides maximum power for developers and products staying focused on the end-user experience
    </div>
    <Button type="primary" text="Get Started" link="https://editorjs.io/getting-started"/>
    <UnfairAdvantages :class="'landing-header__ua'"/>
  </div>
</template>

<style>
.landing-header {
  background: linear-gradient(180deg, #E3F2FF 0%, rgb(250, 253, 255) 98%);
  padding: 110px var(--layout-offset-x) 0 var(--layout-offset-x);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__description {
    margin-top: 56px;
    margin-bottom: 56px;
    max-width: 460px;
    line-height: 22px;
    width: 100%;
    font-size: 16px;
    color: var(--color-text-secondary);
    text-align: center;
  }

  &__title {
    line-height: 50px;
    margin-top: 51px;
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
<script setup>
import Button from "./UI/Button";
</script>
