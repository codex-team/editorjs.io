<template>
  <div class="header">
    <div class="header__container">
      <EditorLogo size="small"/>
      <div class="menu">
        <a href="/" class="menu__link">Documentation</a>
        <a href="/" class="menu__link">Awesome Plugins</a>
        <a href="/" class="menu__link">Digest</a>
        <a href="/" class="menu__link">GitHub</a>
        <Button icon="assets/star.svg" type="support" text="Support Editor.js"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.menu {
  max-width: 721px;
  padding-left: 160px;
  width: 100%;
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  font-size: 14px;

  &__link {
    color: var(--color-text-primary);
    text-decoration: none;
    padding: 9px 6px;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &__container {
    display: inline-flex;
    max-width: 1180px;
    width: 100%;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
<script>
import EditorLogo from "../EditorLogo";
import Button from "../UI/Button";

export default {
  components: {Button, EditorLogo}
}
</script>
