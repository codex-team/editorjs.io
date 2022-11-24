<template>
  <div class="header">
    <div class="header__container">
      <EditorLogo size="small"/>
      <div class="menu">
        <a href="/" class="menu__link">Documentation</a>
        <a href="/" class="menu__link">Awesome Plugins</a>
        <a href="/" class="menu__link">Digest</a>
        <a href="/" class="menu__link">GitHub</a>
        <Button :icon="starIcon" type="support" text="Support Editor.js"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.menu {
  max-width: 560px;
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
    font-weight: 500;
  }
}

.header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &__container {
    display: flex;
    max-width: var(--layout-container-width);
    width: 100%;
    padding: 0 20px 0 20px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
<script>
import EditorLogo from "../EditorLogo";
import Button from "../UI/Button";
import starIcon from "~/assets/star.svg";

export default {
  data() {
    return {
      starIcon,
    };
  },
  components: {Button, EditorLogo}
}
</script>
