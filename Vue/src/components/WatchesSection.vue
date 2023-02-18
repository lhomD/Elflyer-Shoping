<template>
  <div class="mx-auto mt-20 w-full max-w-max px-4 text-center">
    <div
      class="flex w-full flex-col overflow-hidden text-center text-slate-800"
    >
      <h2 class="mb-5 text-2xl font-bold capitalize md:mb-10">mens-watches</h2>
      <ul class="moveside flex w-full items-start gap-8 pb-0 md:pb-5 lg:pb-10">
        <li
          v-for="product in getProductData.value"
          :key="product.id"
          class="card flex flex-col items-center bg-white py-2 px-2 shadow-3xl md:py-5 md:px-5"
        >
          <h3 class="text-xl font-bold">{{ product.title }}</h3>
          <p class="text-base md:mb-12">
            <span class="text-orange-500">Price</span> $ {{ product.price }}
          </p>
          <img
            :src="product.thumbnail"
            alt="iPhone 9"
            class="mb-6 h-80 w-60 object-cover md:mb-12"
          />
          <div class="flex w-full justify-between">
            <button
              class="duration-50 font-bold capitalize text-orange-500 transition hover:text-orange-300 hover:ease-in"
            >
              buy now
            </button>
            <RouterLink
              :to="`/products/${product.id}`"
              class="duration-50 capitalize transition hover:text-orange-300 hover:ease-in"
              >see more</RouterLink
            >
          </div>
        </li>
      </ul>
    </div>
    <div class="mb-24 mt-6 flex justify-between md:justify-around">
      <button
        @click="$emit('slideCards')"
        class="flex items-center justify-center bg-slate-800 p-5 text-slate-100"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button
        @click="$emit('slideCards')"
        class="flex items-center justify-center bg-slate-800 p-5 text-slate-100"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import { useDisplayMode } from "../stores/store.js";
const storeData = useDisplayMode();

let dataArr = ref([]);

const getProductData = computed(() => {
  axios.get(storeData.baseUrl + "/category/mens-watches").then((res) => {
    dataArr.value = res.data.products;
  });
  return dataArr;
});
</script>
