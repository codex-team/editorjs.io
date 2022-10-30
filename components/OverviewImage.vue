<template>
  <div class="overview">
    <div class="container">
      <img class="overview__image" src="assets/editor.svg"/>
      <Button class="overview__cta" type="demo" text="Open Demo" icon="assets/marker.svg"/>
    </div>
  </div>
</template>

<style lang="postcss">
.overview {
  background-color: var(--color-backround-image-overview);
  padding: 50px;
  position: relative;
  height: 960px;

  &__image {
    border-radius: 20px;
  }

  &__cta {
    bottom: -20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.container {
  width: 840px;
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

export default {
  components: {Button}
}
</script>
