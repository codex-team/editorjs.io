<template>
  <div class="become-sponsor">
    <img src="~/assets/gift.svg" class="become-sponsor__icon" alt="gift">
    <div class="become-sponsor__title">
      Become a sponsor
    </div>
    <div class="become-sponsor__buttons">
      <UiSponsor link="https://opencollective.com/editorjs/contribute/backer-8632/checkout?interval=month&amount=2&name=&legalName=&email=" text="$2 / mo" :on-click="onClick"/>
      <UiSponsor link="https://opencollective.com/editorjs/contribute/backer-8632/checkout?interval=month&amount=10&name=&legalName=&email=" text="$10 / mo" :on-click="onClick"/>
      <UiSponsor link="https://opencollective.com/editorjs/donate" text="One-time" :on-click="onClick"/>
    </div>
    <a
      href="https://codex.so/donate"
      class="become-sponsor__more"
      target="_blank"
    >
      More options
    </a>
  </div>
  <div class="sponsors">
    <div class="sponsors__grade" v-for="grade in sponsors">
      <div class="sponsors__grade__title">
        {{ grade.label }}
      </div>
      <div class="sponsors__grade__list">
        <object type="image/svg+xml"
                data="https://opencollective.com/editorjs/tiers/backer.svg?avatarHeight=36&amp;width=300"
                v-if="grade.label === 'Backers'"></object>
        <a target="_blank" :href="sponsor.link" class="sponsor" v-if="grade.label !== 'Backers'" v-for="sponsor in grade.items" :style="{'width': grade.size + 'px',
                                                                     'height': grade.size + 'px'}">
          <img :src="sponsor.picture">
        </a>
        <a target="_blank" :href="grade.link" class="sponsor" v-if="grade.label !== 'Backers'" :style="{'width': grade.size + 'px',
                                                                     'height': grade.size + 'px'}">
            <img src="~/assets/gold_plus.svg" v-if="grade.label === 'Gold'" alt="gold">
            <img src="~/assets/silver_plus.svg" v-if="grade.label === 'Silver'" alt="silver">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '~/assets/bucerius.jpeg';

defineProps<{
  /**
   * Callback for click events in this component
   */
  onClick: (buttonText: string) => void,
}>()

const sponsors = [
  {
    label: 'Gold',
    items: [
      {
        picture: logo,
        title: 'Bucerius',
        link: '//'
      },
    ],
    size: 100,
    link: "https://opencollective.com/editorjs/contribute/gold-sponsor-12748/checkout?interval=month&amount=1000",
  },
  {
    label: 'Silver',
    items: [
      {
        picture: logo,
        title: 'Bucerius',
        link: '//'
      },
    ],
    size: 50,
    link: "https://opencollective.com/editorjs/contribute/sponsor-8679/checkout?interval=month&amount=100",
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
  width: 300px;
  height: 187px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  background-color: #F1F6FA;
  border-radius: 20px;

  &__icon {
    margin-top: 21px;
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
  }

  &__buttons {
    margin-top: 14px;
    align-items: center;
    display: flex;
    gap: 10px;
  }

  &__more {
    color: #6A7F8F;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    margin-top: 14px;
    margin-bottom: 16px;
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
