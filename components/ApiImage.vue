<template>
  <picture
  class="api-image">
    <source media="(max-width: 710px)" srcset="~/assets/api-image-mobile.jpg, ~/assets/api-image-mobile@2x.jpg 2x" />
    <source media="(min-width: 711px)" srcset="~/assets/api-image.jpg, ~/assets/api-image@2x.jpg 2x" />
    <img
      src="~/assets/api-image@2x.jpg"
      alt="Picture if Editor.js Toolbox, Inline Toolbar and Block Tunes menu"
    />
  </picture>
</template>

<style lang="postcss">
.api-image {
  margin: 40px auto 0;
  max-width: 768px;

  @media (--small-viewport) {
    max-width: 400px;
  }
}
</style>

