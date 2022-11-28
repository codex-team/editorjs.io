<template>
  <div class="overview">
    <div class="container">
      <img class="overview__image" src="assets/editor.png" alt="Editor.js example"/>
      <Button class="overview__cta" type="demo" text="Open Demo" :icon="IconMarker"/>
    </div>
  </div>
  <img class="mobile-image" src="assets/editor.png" alt="Editor.js example"/>
</template>

<style lang="postcss">
.overview {
  background-color: var(--color-backround-image-overview);
  padding: 50px;
  position: relative;
  height: 960px;

  @media (--small-viewport) {
    display: none;
  }

  &__image {
    border-radius: 20px;
    box-shadow: 0 7px 41px -10px rgba(76, 96, 146, 0.21);
  }

  &__cta {
    bottom: -20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.mobile-image {
  display: none;
  border-radius: 20px;
  box-shadow: 0 7px 41px -10px rgba(76, 96, 146, 0.21);

  @media (--small-viewport) {
    display: flex;
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
