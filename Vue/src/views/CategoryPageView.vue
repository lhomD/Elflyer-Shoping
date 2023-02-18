<template>
  <div
    v-if="storeData.getProductCategory.length"
    class="mx-auto my-20 w-full max-w-max text-center"
  >
    <h2 class="mb-5 text-2xl font-bold capitalize md:mb-10">
      {{ storeData.prodTitel }}
    </h2>
    <ul class="flex w-full flex-wrap justify-center gap-8">
      <li
        v-for="product in storeData.getProductCategory"
        :key="product.id"
        class="smalCard flex flex-col items-center justify-between bg-white py-2 px-2 shadow-3xl md:py-5 md:px-5"
      >
        <h3 class="text-xl font-bold capitalize">{{ product.title }}</h3>
        <p class="mb-6 text-base md:mb-12">
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

  <div
    v-else
    class="mx-auto my-20 w-full max-w-max px-4 text-center text-slate-800 xl:px-0"
  >
    <h2 class="mb-20 text-2xl font-bold">
      Oops.... This category did not exist.<br />
      Choose some category in the below section. Thanks!
    </h2>
    <div class="flex flex-wrap justify-center gap-8">
      <RouterLink
        @click="storeData.getCategory(category)"
        v-for="category in storeData.allCategories.value"
        :key="category"
        :to="`/categories/${category}`"
        class="rounded-lg p-4 capitalize shadow-md transition duration-150 hover:scale-95 hover:text-orange-500 hover:ease-in"
        >{{ category }}</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useDisplayMode } from "../stores/store.js";
const storeData = useDisplayMode();

const route = useRoute();

let { id } = route.params;

onBeforeMount(() => {
  storeData.getCategorie(id);
});
</script>

<style scoped>
.smalCard {
  min-width: 280px;
  max-width: 280px;
  overflow: hidden;
}
</style>
