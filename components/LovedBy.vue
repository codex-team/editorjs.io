<template>
  <div class="grades">
    <IconMedalFirst alt="Product Of The Day medal" />
    <IconCup alt="Product Of The Week Medal " />
    <IconMedalSecond alt="Product Of The Month medal" />
  </div>
  <div class="status">
    #1 on Product Hunt
  </div>
</template>

<script lang="ts" setup>
import IconMedalFirst from '~/assets/medal_first.svg';
import IconCup from '~/assets/cup.svg';
import IconMedalSecond from '~/assets/medal_second.svg';
</script>

<style scoped>
.resources {
  justify-content: center;
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.grades {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 45px;
}

.status {
  color: #D19702;
  font-weight: 600;
  font-size: 16px;
  margin-top: 13px;
}
</style>
