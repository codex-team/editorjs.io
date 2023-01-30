<template>
  <div class="grades">
    <img src="~/assets/medal_first.svg" alt="Product Of The Day medal" />
    <img src="~/assets/cup.svg" alt="Product Of The Week Medal " />
    <img src="~/assets/medal_second.svg" alt="Product Of The Month medal" />
  </div>
  <div class="status">
    #1 on Product Hunt
  </div>
</template>

<style scoped>
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
