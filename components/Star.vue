<template>
  <div class="star">
    <div class="star__arrows star__arrows--vertical">
      <img src="~/assets/arrow.svg" aria-hidden="true"/>
      <img src="~/assets/arrow.svg" aria-hidden="true"/>
    </div>
    <div class="star__arrows star__arrows--left">
      <img src="~/assets/arrow.svg" aria-hidden="true"/>
      <img src="~/assets/arrow.svg" aria-hidden="true"/>
    </div>
    <div class="star__arrows star__arrows--right">
      <img src="~/assets/arrow.svg" aria-hidden="true"/>
      <img src="~/assets/arrow.svg" aria-hidden="true"/>
    </div>
    <a
      class="star__button"
      href="https://github.com/codex-team/editor.js"
      target="_blank"
      @click="$track(AnalyticEvent.StarClicked)"
    >
      <codex-icon
        name="IconStar"
        :size="28"
      />
      <div class="star__button-text">
        Star
      </div>
      <div class="star__button-count">
        25.7k
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import AnalyticEvent from "~/utils/analytics";
</script>

<style lang="postcss">
.star {
  margin: 130px auto 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  @media --small-viewport {
    margin-bottom: 50px;
  }


  &__button {
    text-decoration: none;
    color: var(--color-text-primary);
    z-index: 1;
    cursor: pointer;
    padding: 9px 9px 9px 12px;
    display: flex;
    align-items: center;
    background: linear-gradient(239.67deg, #FCFCFC 18.14%, #F9F9F9 77.61%);
    border: 1px solid #ededed;
    border-radius: 12px;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;

    &:hover {
      background: #fff;
    }

    .cdx-icon {
      margin-right: 2px;
    }

    &-text {
      margin-right: 9px;
    }

    &-count {
      background-color: rgba(0, 0, 0, 4%);
      border-radius: 32px;
      padding: 6px 11px;
      margin-left: auto;
    }
  }

  &__arrows {
    position: absolute;
    width: 254px;
    height: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 13px;
      height: 21px;

      transform: rotate(-90deg);

      &:last-of-type {
        transform: rotate(90deg);
      }
    }

    &--vertical {
      width: 160px;
      transform: rotate(90deg);
      animation: moveArrowsVertical 450ms ease-in-out infinite alternate;
    }

    &--left {
      transform: rotate(18deg);
    }

    &--right {
      transform: rotate(-18deg);
    }

    &--left,
    &--right {
      animation: moveArrowsHorizontal 450ms ease-in-out infinite alternate;
    }
  }

  &:hover &__arrows {
    &--vertical {
      animation: moveArrowsVerticalHover 390ms ease-in forwards;
    }

    &--left,
    &--right {
      animation: moveArrowsHorizontalHover 390ms ease-in forwards;
    }
  }
}

@keyframes moveArrowsHorizontal {
  to {
    width: 276px;
  }
}

@keyframes moveArrowsVertical {
  to {
    width: 180px;
  }
}


@keyframes moveArrowsHorizontalHover {
  to {
    width: 330px;
    opacity: 0;
  }
}


@keyframes moveArrowsVerticalHover {
  to {
    width: 290px;
    opacity: 0;
  }
}

</style>
