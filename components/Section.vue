<template>
  <section class="section">
    <LayoutCenterContainer>
      <slot/>
    </LayoutCenterContainer>
  </section>
</template>

<style lang="postcss">
.section {
  padding: 100px 0;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
