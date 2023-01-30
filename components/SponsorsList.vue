<template>
  <div class="sponsors">
    <div
      v-for="grade in sponsors"
      class="sponsors__grade"
    >
      <div class="sponsors__grade-title">
        {{ grade.label }}
      </div>
      <div class="sponsors__grade-list">
        <object
          v-if="grade.openCollectiveAvatarsUrl"
          type="image/svg+xml"
          :data="grade.openCollectiveAvatarsUrl"
        ></object>
        <a
          v-else-if="grade.items"
          v-for="sponsor in grade.items"
          :href="sponsor.link"
          class="sponsors__grade-pic"
          :style="{
            'width': grade.size + 'px',
            'height': grade.size + 'px'
          }"
          target="_blank"
          >
          <img
            src="~/assets/bucerius.jpeg"
            :width="grade.size"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sponsors = [
  {
    label: 'Gold',
    items: [
      {
        title: 'Bucerius Law School',
        link: 'https://www.law-school.de'
      },
    ],
    size: 100,
    link: "https://opencollective.com/editorjs/contribute/gold-sponsor-12748/checkout?interval=month&amount=1000",
  },
  {
    label: 'Silver',
    openCollectiveAvatarsUrl: 'https://opencollective.com/editorjs/tiers/sponsor.svg?avatarHeight=50&width=300',
    link: "https://opencollective.com/editorjs/contribute/sponsor-8679/checkout?interval=month&amount=100",
  },
  {
    label: 'Backers',
    openCollectiveAvatarsUrl: 'https://opencollective.com/editorjs/tiers/backer.svg?avatarHeight=22&width=300',
    link: 'https://opencollective.com/editorjs/contribute/backer-8632/checkout?interval=month&amount=2',
  }
]
</script>

<style lang="postcss">
@import url('~/assets/styles/mixins.pcss');

.sponsors {
  margin-top: 78px;

  &__grade {
    margin-top: 28px;

    &:first-child {
      margin-top: 0;
    }

    &-title {
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      margin-bottom: 15px;
    }

    &-list {
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    &-pic {
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.06);
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}


</style>
