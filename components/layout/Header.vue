<template>
  <div class="header">
    <EditorLogo size="small"/>
    <div class="menu">
      <a href="/" class="menu__link">Documentation</a>
      <a href="/" class="menu__link">Awesome Plugins</a>
      <a href="/" class="menu__link">Digest</a>
      <a href="/" class="menu__link">GitHub</a>
      <Button icon="assets/star.svg" type="support" text="Support Editor.js"/>
    </div>
  </div>
</template>

<style scoped>

.menu {
  width: 500px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.menu__link {
  color: var(--color-text-primary);
  text-decoration: none;
}

.header {
  width: 100%;
  display: inline-flex;
  padding: 20px 20% 20px 20%;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
<script>
import EditorLogo from "../EditorLogo";
import Button from "../UI/Button";
export default {
  components: {Button, EditorLogo}
}
</script>
