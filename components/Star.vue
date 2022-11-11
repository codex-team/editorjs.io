<template>
  <div class="star">
    <div class="star__arrows-line">
      <img src="assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
      <img src="assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
    </div>
    <div class="star__arrows-line star__arrows-line--left">
      <img src="assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
      <img src="assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
    </div>
    <div class="star__arrows-line star__arrows-line--right">
      <img src="assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
      <img src="assets/arrow.svg" class="star__arrows-line__arrow" alt="arrow">
    </div>
    <div class="star__button">
      <img src="assets/git_star.svg">
      <div class="star__button__text">
        Star
      </div>
      <div class="star__button__count">
        19.5k
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.star {
  margin-top: 30px;
  width: 200px;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__button {
    padding: 9px 9px 9px 14px;
    display: flex;
    align-items: center;
    background: linear-gradient(239.67deg, #FCFCFC 18.14%, #F9F9F9 77.61%);
    border: 1px solid #E1E1E1;
    border-radius: 11px;
    width: 160px;
    height: 53px;
    font-weight: 700;
    font-size: 18px;

    &__text {
      margin-left: 6px;
    }

    &__count {
      background-color: rgba(0, 0, 0, 4%);
      border-radius: 32px;
      padding: 6px 11px;
      margin-left: auto;
    }
  }

  &__arrows-line {
    margin: 0;
    position: absolute;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: moveArrows 1s linear infinite alternate;

    &__arrow {
      height: 20px;
    }

    &__arrow:last-child {
      transform: rotate(180deg);
    }

    &--left {
      transform: rotate(70deg);
      writing-mode: horizontal-tb;
      height: 130%;
    }

    &--right {
      transform: rotate(-70deg);
      writing-mode: horizontal-tb;
      height: 130%;
    }
  }
}

@keyframes moveArrows {
  from {
    padding-top: 0;
    padding-bottom: 0;
  }

  to {
    padding-top: 10%;
    padding-bottom: 10%;
  }
}
</style>
