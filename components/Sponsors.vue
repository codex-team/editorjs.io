<template>
  <div class="sponsors">
    <div
      v-for="grade in sponsors"
      class="sponsors__grade"
    >
      <div class="sponsors__grade__title">
        {{ grade.label }}
      </div>
      <div class="sponsors__grade__list">
        <object
          v-if="grade.openCollectiveAvatarsUrl"
          type="image/svg+xml"
          :data="grade.openCollectiveAvatarsUrl"
        ></object>
        <a
          v-else-if="grade.items"
          v-for="sponsor in grade.items"
          :href="sponsor.link"
          class="sponsor"
          :style="{
            'width': grade.size + 'px',
            'height': grade.size + 'px'
          }"
          target="_blank"
          >
          <img
            :src="sponsor.picture"
            :width="grade.size"
          >
        </a>
      </div>
    </div>
  </div>
  <div class="become-sponsor">
    <SvgGift
      class="become-sponsor__icon"
      aria-hidden="true"
    />
    <div class="become-sponsor__title">
      Become a sponsor
    </div>
    <div class="become-sponsor__buttons">
      <UiButton
        type="primary"
        small
        link="https://opencollective.com/editorjs/contribute/backer-8632/checkout?interval=month&amount=2&name=&legalName=&email="
        text="$2 / mo"
      />
      <UiButton
        type="primary"
        small
        link="https://opencollective.com/editorjs/contribute/backer-8632/checkout?interval=month&amount=10&name=&legalName=&email="
        text="$10 / mo"
      />
      <UiButton
        type="primary"
        small
        link="https://opencollective.com/editorjs/donate"
        text="One-time"
      />
    </div>
    <a
      href="https://codex.so/donate"
      class="become-sponsor__more"
      target="_blank"
    >
      More options
    </a>
  </div>
</template>

<script setup lang="ts">
import SvgGift from '~/assets/gift.svg';
import logo from '~/assets/bucerius.jpeg';

const sponsors = [
  {
    label: 'Gold',
    items: [
      {
        picture: logo,
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

.become-sponsor {
  display: inline-flex;
  padding: 32px 36px;

  flex-direction: column;
  align-items: center;
  margin: 80px auto 0;
  background-color: #F3FBFD;
  border-radius: 20px;

  @media (max-width: 375px){
    padding: 16px 20px;
  }

  .button {
    @apply --squircle;

    @media (max-width: 350px){
      font-size: 12px;
    }
  }

  &__icon {
    margin-top: 5px;
  }

  &__title {
    margin-top: 3px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
  }

  &__buttons {
    margin-top: 16px;
    align-items: center;
    display: flex;
    gap: 10px;
  }

  &__more {
    color: #6A7F8F;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 16px;

    &:hover {
      color: #2B3944;
    }
  }
}

.sponsors {
  margin-top: 78px;

  &__grade {
    margin-top: 28px;

    &:first-child {
      margin-top: 0;
    }

    &__title {
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 11px;
    }

    &__list {
      display: flex;
      justify-content: center;
      gap: 15px;
    }
  }
}

.sponsor {
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
