<template>
  <div class="header">
    <div class="header__container">
      <EditorLogo size="small"/>
      <Button type="support--mobile" :icon-path="starIcon" link="http://opencollective.com/editorjs"/>
      <div class="menu">
        <a href="https://editorjs.io/getting-started" class="menu__link">Documentation</a>
        <a href="https://github.com/editor-js/awesome-editorjs" class="menu__link">Awesome Plugins</a>
        <a href="https://digest.editorjs.io" class="menu__link">Digest</a>
        <a href="https://github.com/codex-team/editor.js" class="menu__link">GitHub</a>
        <Button :icon-path="starIcon" type="support" text="Support Editor.js" link="http://opencollective.com/editorjs"/>
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
    white-space: nowrap;
    @media (--small-viewport) {
      padding: 12px 0;
    }
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

  @media (--small-viewport) {
    height: 100px;
    padding: 5px;

    &__container {
      padding: 20px 0 20px 0;
      flex-direction: column;
      align-items: flex-start;
    }
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
