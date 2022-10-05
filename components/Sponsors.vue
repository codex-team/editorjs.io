<template>
  <div class="sponsors">
    <section
      class="sponsors__section"
      v-for="section in sections"
    >
      <div class="sponsors__section-title">
        {{ section.title }}
      </div>
      <div class="sponsors__section-list">
        <a
          v-for="item in section.items"
          href="item.link"
        >
          <img
            src="{{ item.picture }}"
            alt="{{ item.title }}"
          >
        </a>
      </div>
    </section>
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
.sponsors {
  &__section {
    &:not(:last-of-type){
      margin-bottom: 30px
    }

    &-title {
      font-weight: bold;
      font-size: 20px;
    }
  }
}
</style>
