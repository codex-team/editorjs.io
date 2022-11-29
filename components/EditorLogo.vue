<template>
  <div class="editor-logo" :class="{
    'editor-logo--small': size === 'small',
    'editor-logo--general': size === 'general',
  }">
    <img class="editor-logo__icon" src="assets/logo.svg" alt="logo"/>
    <p class="editor-logo__title"> Editor.js </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * size of logo
   */
  size?: 'small' | 'general',
}>()
</script>

<style lang="postcss" scoped>

.editor-logo {
  display: flex;
  align-items: center;

  &__title {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-text-primary);
    padding: 0;
  }
}

.editor-logo--small {
  .editor-logo__icon {
    height: 23px;
    width: 23px;
  }

  .editor-logo__title {
    margin-left: 8px;
  }
}

.editor-logo--general {
  cursor: default;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .editor-logo__icon {
    width: 86px;
    height: 86px;
    -webkit-filter: drop-shadow(0 10px 5px rgba(0, 148, 255, 0.4));
  }

  .editor-logo__title {
    font-size: 40px;
    margin-top: 15px;
  }
}
</style>
