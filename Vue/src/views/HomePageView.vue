<template>
  <smartphones-section @slide-cards="cardMover" />
  <laptops-section @slide-cards="cardMover" />
  <watches-section @slide-cards="cardMover" />
</template>

<script setup>
import SmartphonesSection from "../components/SmartphonesSection.vue";
import LaptopsSection from "../components/LaptopsSection.vue";
import WatchesSection from "../components/WatchesSection.vue";
import { onMounted } from "vue";
import { useDisplayMode } from "../stores/store.js";
const storeData = useDisplayMode();

onMounted(() => {
  setInterval(() => {
    cardMover();
  }, 5000);
});

function cardMover() {
  storeData.checkWindow();
  let cardsEl = document.querySelectorAll(".moveside");
  cardsEl.forEach((card) => {
    card.style.transform = storeData.movingCards;
  });
}
</script>

<style>
.moveside {
  transition: transform 0.5s ease-in-out;
}
.card {
  min-width: 280px;
  max-width: 280px;
  overflow: hidden;
}
</style>
