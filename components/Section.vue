<template>
  <section
    class="section"
    :class="{'section--no-paddings': noPaddings}"
  >
    <LayoutCenterContainer>
      <slot/>
    </LayoutCenterContainer>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * The 'true' will remove default vertical paddings of the section
   */
  noPaddings?: Boolean,
}>()
</script>


<style lang="postcss">
.section {
  --vertical-padding: 100px;

  @media (--small-viewport) {
    --vertical-padding: 30px;
  }

  &--no-paddings {
    --vertical-padding: 0;
  }

  padding: var(--vertical-padding) 0;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
