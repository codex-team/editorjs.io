<template>
  <div class="become-sponsor">
    <div class="become-sponsor__title">
      Become a sponsor
    </div>
    <div class="become-sponsor__buttons">
      <button>$2 / mo</button>
      <button>$10 / mo</button>
      <button>One-time</button>
    </div>
    <a
      href=""
      class="become-sponsor__more"
    >
      More options
    </a>
  </div>
</template>

<script setup>
const sponsors = [
  {
    label: 'Gold',
    items: [
      {
        picture: 'someurl',
        title: 'Bucerius',
        link: '//'
      },
    ],
    size: 100,
  },
  {
    label: 'Silver',
    items: [
      {
        picture: 'someurl',
        title: 'Bucerius',
        link: '//'
      },
    ],
    size: 50,
  },
  {
    label: 'Backers',
    items: [
      {
        picture: 'someurl',
        title: 'Bucerius',
        link: '//'
      },
    ],
    size: 34,
  }
]
</script>

<style lang="postcss">
.become-sponsor {
  background-color: #F1F6FA;
  border-radius: 20px;

  &__buttons {
    margin-top: 16px;
    display: flex;
    gap: 10px;
  }

  &__more {

  }
}
</style>
