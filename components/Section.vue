<template>
  <section class="section">
    <LayoutCenterContainer>
      <slot/>
    </LayoutCenterContainer>
  </section>
</template>

<style lang="postcss">
.section {
  --vertical-padding: 100px;

  @media (--small-viewport) {
    --vertical-padding: 30px;
  }

  padding: var(--vertical-padding) 0;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
