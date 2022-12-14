<template>
  <div class="center-container">
    <slot />
  </div>
</template>

<style>
.center-container {
  max-width: var(--layout-container-max-width);
  margin: 0 auto;
  width: 100%;
  padding: 0 var(--layout-padding-horizontal);
}
</style>
