<template>
  <div class="ua">
    <div class="ua__item__wrapper" v-for="advantage in advantages">
      <div class="ua__item">
        <div class="ua__item-title">
          {{ advantage.title }}
        </div>
        <div class="ua__item-text">
          {{ advantage.text }}
        </div>
      </div>
      <hr class="ua__delimiter">
    </div>
  </div>
</template>

<script setup>

const advantages = [
  {
    title: 'Free and open-source',
    text: 'Improved by the whole world. You could join.'
  },
  {
    title: 'Clean UI/UX',
    text: 'Modern look. Customizable. Out of the box.'
  },
  {
    title: 'Simple API driven',
    text: 'Really simple. Create an any tool. Lots of already created.'
  },
  {
    title: 'Powered by CodeX',
    text: 'The team of senior developers loving Open Source'
  },
]
</script>

<style scoped>
  .ua {
    display: flex;
    max-width: 1024px;
    width: 100%;
    margin-top: 120px;
    & .ua__item__wrapper:last-child > .ua__delimiter {
      display: none;
    }

    &__delimiter {
      align-self: center;
      height: 15px;
      border: 0.5px solid var(--color-text-secondary);
      margin: 0 24px 0 24px;
    }

    &__item {
      align-self: center;
      width: auto;
      max-width: 240px;
      height: 68px;

      &__wrapper {
        display: flex;
      }

      &-title {
        white-space: nowrap;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 5px;
      }

      &-text {
        line-height: 19px;
        font-size: 15px;
      }
    }
    @media (--small-viewport) {
      flex-direction: column;
      align-items: center;

      &__container {
        flex-direction: column;
        align-items: flex-start;
      }

      &__item{
        margin-top: 20px;
        text-align: center;
        
        &__wrapper{
          flex-direction: column;
        }
      }

      &__delimiter {
        display: none;
      }
    }
  }
</style>
