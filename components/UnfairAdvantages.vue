<template>
  <div class="ua">
    <div
      v-for="(advantage, index) in advantages"
      class="ua__item"
    >
      <div class="ui__item-body">
        <div class="ua__item-title">
        {{ advantage.title }}
        </div>
        <div class="ua__item-text">
          {{ advantage.text }}
        </div>
      </div>
      <div
        v-if="index < advantages.length - 1"
        class="ua__item-delimiter"
      ></div>
    </div>
  </div>
</template>

<script setup>

const advantages = [
  {
    title: 'Free and Open-Source',
    text: 'Evolving with global contributions. Join and be part of the innovation.'
  },
  {
    title: 'Clean UI/UX',
    text: 'Modern, customizable, and ready to use right out of the box.'
  },
  {
    title: 'API-Driven Simplicity',
    text: 'Simple yet powerful. Build or use existing tools.'
  },
  {
    title: 'Powered by CodeX',
    text: 'Built by passionate open-source developers.'
  },
]
</script>

<style scoped lang="postcss">
  .ua {
    --gap: 22px;
    --title-margin: 12px;
    --title-font-size: 20px;
    --title-letter-spacing: 0.38px;
    --text-font-size: 15px;

    display: grid;
    grid-template-columns: repeat(4, 0.24fr);
    gap: var(--gap);
    justify-content: space-around;

    @media (--small-viewport) {
      grid-template-columns: auto;

      --title-margin: 0;
      --title-font-size: 16px;
      --title-letter-spacing: 0.1px;
      --text-font-size: 14px;
    }

    &__item {
      display: flex;
      text-align: left;

      &-title {
        font-size: var(--title-font-size);
        font-weight: 700;
        letter-spacing: var(--title-letter-spacing);
        line-height: 26px;
        margin-bottom: var(--title-margin);
      }

      &-text {
        line-height: 19px;
        font-size: var(--text-font-size);
        letter-spacing: 0.1px;
      }

      &-delimiter {
        height: 15px;
        width: 3px;
        background-color: var(--color-text-secondary);
        margin: auto 0 auto var(--gap);
        border-radius: 3px;
        flex-shrink: 0;
        opacity: .15;

        @media (--small-viewport) {
          display: none;
        }
      }
    }
  }
</style>
