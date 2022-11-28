<template>
  <div class="overview">
    <div class="container">
      <img class="overview__image" src="assets/editor.jpg" alt="Editor.js example"/>
      <Button class="overview__cta" type="demo" text="Open Demo" :icon="IconMarker"/>
      <img class="mobile-image" src="assets/editor.jpg" alt="Editor.js example"/>
    </div>
  </div>
</template>

<style lang="postcss">
.overview {
  background-color: var(--color-backround-image-overview);
  padding: 50px;
  position: relative;
  height: 960px;

  @media (--small-viewport) {
    padding: 10px 0 10px 0;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    border-radius: 20px;
    box-shadow: 0 7px 41px -10px rgba(76, 96, 146, 0.21);
    @media (--small-viewport) {
      display: none;
    }
  }

  &__cta {
    bottom: -20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (--small-viewport) {
      display: none !important;
    }
  }
}

.mobile-image {
  display: none;
  max-width: 420px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 7px 41px -10px rgba(76, 96, 146, 0.21);

  @media (--small-viewport) {
    display: block;
  }
}

.container {
  max-width: 840px;
  width: 100%;
  border-radius: 20px;
  height: 1236px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -70px;

  @media (--small-viewport) {
    position: static;
    max-width: 420px;
    transform: none;
    height: auto;
  }
}
</style>
<script>
import Button from "./UI/Button";
import { IconMarker } from "@codexteam/icons"

export default {
  data() {
    return {
      IconMarker
    }
  },
  components: {Button}
}
</script>
