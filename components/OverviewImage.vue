<template>
  <div class="overview">
    <div class="container">
      <img class="overview__image" src="assets/editor.png" alt="Editor.js example"/>
      <Button class="overview__cta" type="demo" text="Open Demo" :icon="markerIcon"/>
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
    height: auto;
    margin-bottom: 150px;
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
import markerIcon from "~/assets/marker.svg";

export default {
  data() {
    return {
      markerIcon
    }
  },
  components: {Button}
}
</script>
