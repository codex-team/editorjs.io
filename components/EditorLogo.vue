<template>
  <div class="editor-logo" :class="{
    'editor-logo--small': size === 'small',
    'editor-logo--general': size === 'general',
  }">
    <img class="editor-logo__icon" src="assets/logo.svg"/>
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

<style scoped>

  .editor-logo {
    display: flex;
    align-items: center;
  }

  .editor-logo__title {
    font-weight: 700;
    color: var(--color-text-primary);
  }

  .editor-logo--small {
    .editor-logo__icon {
      height: 28px;
      width: 28px;
    }

    .editor-logo__title {
      margin-left: 8px;
    }
  }

  .editor-logo--general {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .editor-logo__icon {
      width: 86px;
      height: 86px;
      -webkit-filter: drop-shadow(0 10px 8px rgba(0, 148, 255, 0.97));
    }

    .editor-logo__title {
      font-size: 40px;
      margin-top: 20px;
    }
  }
</style>
