<template>
  <div
    class="mx-auto mt-10 flex w-full max-w-max flex-col px-4 text-slate-800 md:mt-10 lg:mt-20"
  >
    <h2
      class="mb-5 text-center text-xl font-bold capitalize sm:text-4xl lg:mb-10"
    >
      {{ storeData.singleProd.title }}
    </h2>
    <div
      class="flex flex-col gap-10 border-b-2 border-slate-200 pb-10 lg:flex-row"
    >
      <div class="flex flex-col lg:w-1/2">
        <img
          class="imageSlider mx-auto mb-8 h-80 w-80 p-5 shadow-lg md:h-auto md:w-full md:p-10"
          :src="storeData.singleProdImg[storeData.imageCounter]"
          alt="Titel"
        />
        <div class="flex justify-center gap-40">
          <button
            @click="storeData.imageCounterIncresa"
            class="duration-50 flex items-center justify-center bg-slate-800 p-5 text-slate-100 transition hover:text-orange-300 hover:ease-in"
          >
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </button>
          <button
            @click="storeData.imageCounterIncresa"
            class="duration-50 flex items-center justify-center bg-slate-800 p-5 text-slate-100 transition hover:text-orange-300 hover:ease-in"
          >
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center gap-8 lg:w-1/2 lg:items-start">
        <p class="text-base font-semibold">
          <span class="text-orange-500">Price</span> $
          {{ storeData.singleProd.price }}
        </p>
        <p class="my-auto text-xl">
          {{ storeData.singleProd.description }}
        </p>
        <button
          class="duration-50 mb-auto rounded-md bg-orange-500 px-9 py-2 font-semibold capitalize text-slate-50 shadow-lg transition hover:scale-95 hover:ease-in"
        >
          Buy now
        </button>
      </div>
    </div>
  </div>

  <div class="md:my-18 mx-auto my-10 w-full max-w-max px-4">
    <h2 class="text-center text-2xl font-bold capitalize">Related Products</h2>
    <ul class="flex items-start gap-8 overflow-x-auto py-8 md:pb-5 lg:pb-10">
      <li
        v-for="product in storeData.relativeProdArr"
        class="smalCard flex flex-col items-center justify-between bg-white py-2 px-2 shadow-3xl md:py-5 md:px-5"
      >
        <h3 class="text-center text-xl font-bold capitalize">
          {{ product.title }}
        </h3>
        <p class="mb-6 text-base">
          <span class="text-orange-500">Price</span> $ {{ product.price }}
        </p>
        <img
          :src="product.thumbnail"
          alt="iPhone 9"
          class="mb-6 h-40 w-60 object-cover"
        />
        <div class="flex w-full justify-between">
          <button
            class="duration-50 font-bold capitalize text-orange-500 transition hover:text-orange-300 hover:ease-in"
          >
            buy now
          </button>
          <RouterLink
            @click="storeData.getSingleProduct(product.id)"
            :to="`/products/${product.id}`"
            class="duration-50 capitalize transition hover:text-orange-300 hover:ease-in"
            >see more</RouterLink
          >
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useDisplayMode } from "../stores/store.js";
const storeData = useDisplayMode();
const route = useRoute();
let { id } = route.params;

onMounted(() => {
  storeData.getSingleProduct(id);
  storeData.realativeProd;
});
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .imageSlider {
    width: 600px;
    height: 600px;
    object-fit: cover;
  }
}
li {
  width: 100%;
  min-width: 250px;
  min-height: 350px;
  max-height: 350px;
}
li h3 {
  height: 56px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
