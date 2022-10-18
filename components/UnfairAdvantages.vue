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
    title: 'Clean UI and UX',
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
    padding: 0 20% 0 20%;
    & .ua__item__wrapper:last-child > .ua__delimiter {
      display: none;
    }
  }

  .ua__item {
    width: auto;
  }

  .ua__item-title {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .ua__delimiter {
    align-self: center;
    height: 15px;
    border: 0.5px solid var(--color-text-secondary);
    margin: 0 25px 0 25px;
  }

  .ua__item__wrapper {
    display: flex;
  }
</style>
