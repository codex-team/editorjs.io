<template>
  <div class="ua">
    <div
      v-for="advantage in advantages"
      class="ua__item"
    >
      <div class="ua__item-title">
        {{ advantage.title }}
      </div>
      <div class="ua__item-text">
        {{ advantage.text }}
      </div>
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
