<script lang="ts" setup></script>

<template>
  <div class="resources">
    <a href="https://tj.ru"><img src="assets/tj.svg" alt="tj.ru"></a>
    <a href="https://dtf.ru"><img src="assets/dtf.svg" alt="dtf.ru"></a>
    <a href="https://vc.ru"><img src="assets/vc.svg" alt="vc.ru"></a>
  </div>
  <div class="grades">
    <img src="assets/medal_first.svg" alt="medal">
    <img src="assets/cup.svg" alt="cup">
    <img src="assets/medal_second.svg" alt="medal">
  </div>
  <div class="status">
    #1 on Product Hunt
  </div>
</template>

<style scoped>
.resources {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.grades {
  display: flex;
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
