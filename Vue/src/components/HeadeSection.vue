<template>
  <div
    class="flex h-auto flex-col items-center bg-hero-pattern bg-cover bg-no-repeat"
  >
    <!-- Menu side -->
    <!-- sideNav -->
    <div
      class="translate:ease-in fixed left-0 bottom-0 top-0 z-30 flex flex-col gap-8 overflow-y-auto bg-gray-900 py-8 text-xl text-slate-100 transition duration-300"
      :class="{ '-translate-x-full': !storeData.sideMenu }"
    >
      <font-awesome-icon
        @click="storeData.sideMenuBolean"
        :icon="['fas', 'close']"
        class="mr-5 cursor-pointer self-end text-2xl transition hover:text-orange-500 hover:ease-in"
      />
      <nav class="flex flex-col gap-8 px-12">
        <RouterLink
          @click="
            storeData.getCategorie(category);
            storeData.sideMenuBolean();
          "
          v-for="category in storeData.allCategories.value"
          :key="category"
          :to="`/categories/${category}`"
          class="capitalize transition duration-150 hover:text-orange-500 hover:ease-in"
          >{{ category }}</RouterLink
        >
      </nav>
    </div>
    <!-- Navigation att the top -->
    <nav
      class="z-20 hidden w-full max-w-max flex-row items-center justify-center gap-8 bg-gray-900 py-4 text-base font-medium text-slate-50 md:flex"
    >
      <a
        class="mt-auto transition duration-150 hover:text-orange-500 hover:ease-in"
        href="#"
        >Best Sellers</a
      >
      <a
        class="transition duration-150 hover:text-orange-500 hover:ease-in"
        href="#"
        >Gift Ideas</a
      >
      <a
        class="transition duration-150 hover:text-orange-500 hover:ease-in"
        href="#"
        >New Releases</a
      >
      <a
        class="transition duration-150 hover:text-orange-500 hover:ease-in"
        href="#"
        >Today’s Deals</a
      >
      <a
        class="mb-auto transition duration-150 hover:text-orange-500 hover:ease-in"
        href="#"
        >Customer Service</a
      >
    </nav>
    <!-- Logotype  -->
    <RouterLink to="/"
      ><img class="py-8" src="../assets/images/logo.png" alt="logo" />
    </RouterLink>
    <!-- Burger, dropdown searchfield, lang and other -->
    <div
      class="flex w-full max-w-max flex-col items-center justify-between gap-7 px-4 text-slate-50 md:flex-row xl:px-0"
    >
      <div
        class="z-10 flex w-full items-center justify-between gap-3 md:order-last md:w-auto"
      >
        <div class="relative md:text-slate-800">
          <div
            @click="storeData.languageMenyBolean"
            class="flex cursor-pointer flex-row items-center gap-2 rounded-md md:bg-slate-50 md:p-2"
          >
            <img class="h-2" src="../assets/images/flag-uk.png" alt="UK Flag" />
            <a href="#"> English </a>
            <font-awesome-icon
              :icon="['fa', 'chevron-down']"
              class="text-xs md:ml-2"
            />
          </div>
          <div
            class="absolute mt-1 flex w-40 flex-row items-center gap-4 rounded-md border-2 bg-slate-50 p-4 text-slate-800"
            :class="{ hidden: !storeData.languageMeny }"
          >
            <img
              class="h-4"
              src="../assets/images/flag-france.png"
              alt="France Flag"
            />
            <a href="#"> France </a>
          </div>
        </div>

        <div>
          <ul class="flex gap-4">
            <li
              class="flex cursor-pointer gap-2 transition duration-150 ease-in hover:text-orange-500"
            >
              <a href="#"
                ><font-awesome-icon :icon="['fas', 'shopping-cart']" /></a
              ><span>Cart</span>
            </li>
            <li
              class="flex cursor-pointer gap-2 transition duration-150 ease-in hover:text-orange-500"
            >
              <a href="#"><font-awesome-icon :icon="['fas', 'user']" /></a
              ><span>Profile</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex w-full flex-1 flex-row items-center gap-1 md:gap-4">
        <font-awesome-icon
          @click="storeData.sideMenuBolean"
          class="inline-flex cursor-pointer text-5xl"
          :icon="['fas', 'bars']"
        />
        <div class="relative">
          <button
            @click="storeData.categoryMenyBolean"
            class="hidden items-center rounded bg-gray-900 py-2 px-3 lg:flex"
          >
            All Category
            <font-awesome-icon
              :icon="['fa', 'chevron-down']"
              class="ml-2 text-xs"
            />
          </button>
          <div
            class="absolute z-20 mt-1 flex w-56 flex-col rounded border-2 bg-slate-50 py-4 text-base font-normal text-slate-800"
            :class="{ hidden: !storeData.categoryMeny }"
          >
            <a
              class="px-7 py-2 transition duration-150 ease-in hover:bg-slate-200"
              href="#"
              >Action 1</a
            >
            <a
              class="px-7 py-2 transition duration-150 ease-in hover:bg-slate-200"
              href="#"
              >Another Action</a
            >
            <a
              class="px-7 py-2 transition duration-150 ease-in hover:bg-slate-200"
              href="#"
              >Something else here</a
            >
          </div>
        </div>

        <form
          class="mx-auto flex h-10 flex-1 justify-between overflow-hidden rounded-md"
        >
          <input
            class="w-full py-2 px-3 text-slate-800 placeholder:text-slate-400"
            type="text"
            placeholder="Search this blog"
          />
          <button class="flex bg-orange-500 p-3">
            <font-awesome-icon
              :icon="['fas', 'magnifying-glass']"
            ></font-awesome-icon>
          </button>
        </form>
      </div>
    </div>
    <!-- Titel -->
    <div class="relative mt-20 w-full max-w-max">
      <span
        @click="storeData.slideLeft"
        class="duration-50 absolute left-4 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-slate-300 text-slate-800 opacity-60 transition hover:text-orange-500 md:top-10 xl:left-0"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </span>

      <div class="w-full overflow-hidden">
        <div
          class="flex flex-row"
          id="slide-titel"
          style="transition: all 1s ease-in-out"
          :style="{ translate: storeData.slideTitel }"
        >
          <div class="newTitel min-w-full text-center">
            <h1
              class="text-2xl font-bold uppercase leading-snug text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Get Start
              <br />
              Your favriot shoping
            </h1>
            <button
              class="mt-10 mb-16 rounded-md bg-slate-800 py-3 px-11 font-bold uppercase text-slate-100 transition duration-150 hover:bg-orange-500 hover:ease-in"
            >
              Buy Now
            </button>
          </div>

          <div class="newTitel min-w-full text-center">
            <h1
              class="text-2xl font-bold uppercase leading-snug text-slate-100 sm:text-4xl md:text-6xl"
            >
              Your favriot shoping
              <br />
              Get Start
            </h1>
            <button
              class="mt-10 mb-16 rounded-md bg-slate-800 py-3 px-11 font-bold uppercase text-slate-100 transition duration-150 hover:bg-orange-500 hover:ease-in"
            >
              Buy Now
            </button>
          </div>

          <div class="newTitel min-w-full text-center">
            <h1
              class="text-2xl font-bold uppercase leading-snug text-slate-100 sm:text-4xl md:text-6xl"
            >
              Get Start
              <br />
              Your favriot shoping
            </h1>
            <button
              class="mt-10 mb-16 rounded-md bg-slate-800 py-3 px-11 font-bold uppercase text-slate-100 transition duration-150 hover:bg-orange-500 hover:ease-in"
            >
              Buy Now
            </button>
          </div>

          <div class="newTitel min-w-full text-center">
            <h1
              class="text-2xl font-bold uppercase leading-snug text-slate-100 sm:text-4xl md:text-6xl"
            >
              Your favriot shoping
              <br />
              Get Start
            </h1>
            <button
              class="mt-10 mb-16 rounded-md bg-slate-800 py-3 px-11 font-bold uppercase text-slate-100 transition duration-150 hover:bg-orange-500 hover:ease-in"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <span
        @click="storeData.slideRight"
        class="duration-50 absolute top-0 right-4 flex h-11 w-11 cursor-pointer items-center justify-center justify-self-end rounded-full bg-slate-300 text-slate-800 opacity-60 transition hover:text-orange-500 hover:ease-in md:top-10 xl:right-0"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useDisplayMode } from "../stores/store.js";
const storeData = useDisplayMode();

onMounted(() => {
  let numberOfTitel = document.querySelectorAll(".newTitel");
  storeData.getAllCategories();
  setInterval(() => {
    storeData.titelSlider(numberOfTitel.length);
  }, 5000);
});
</script>
