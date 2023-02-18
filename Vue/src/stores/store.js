import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useDisplayMode = defineStore({
  id: "bolean",
  state: () => ({
    baseUrl: "https://dummyjson.com/products/",
    /* Header Objects */
    sideMenu: false,
    categoryMeny: false,
    languageMeny: false,
    transformValue: 0,
    slideNumber: 0,
    allCategories: [], /* Get links to all categories */
    /* Cards On Start Page */
    counter: 0,
    windowWidth: 0,
    /* Category and single page */
    getCatProd: [],
    relativeProdArr: [],
    prodTitel: ref(""),
    singleProd: [],
    singleProdImg: [],
    imageCounter: ref(0),
  }),
  actions: {
    /* Header Actions */
    sideMenuBolean() {
      this.categoryMeny = false;
      this.languageMeny = false;
      if (!this.sideMenu) {
        this.sideMenu = true;
      } else {
        this.sideMenu = false;
      }
    },
    categoryMenyBolean() {
      this.sideMenu = false;
      this.languageMeny = false;
      if (!this.categoryMeny) {
        this.categoryMeny = true;
      } else {
        this.categoryMeny = false;
      }
    },
    languageMenyBolean() {
      this.sideMenu = false;
      this.categoryMeny = false;
      if (!this.languageMeny) {
        this.languageMeny = true;
      } else {
        this.languageMeny = false;
      }
    },
    slideLeft() {
      if (this.slideNumber <= 0) {
        this.slideNumber++;
      } else {
        this.slideNumber--;
      }
    },
    slideRight() {
      if (this.slideNumber >= 3) {
        this.slideNumber--;
      } else {
        this.slideNumber++;
      }
    },
    titelSlider(num) {
      if (this.slideNumber < num - 1) {
        this.slideNumber++;
      } else {
        this.slideNumber = 0;
      }
    },
    getAllCategories() {
      axios.get('https://dummyjson.com/products/categories').then((res) => {
        this.allCategories.value = res.data;
      });
    },
    /* Start page content */
    checkWindow() {
      if (window.innerWidth < 640) {
        this.windowWidth = 4;
      } else if (window.innerWidth < 1024) {
        this.windowWidth = 3;
      } else {
        this.windowWidth = 2;
      }
      this.moveCards();
    },
    moveCards() {
      if (this.counter >= this.windowWidth) {
        this.counter = 0;
      } else {
        this.counter++;
      }
    },
    /* Category Page */
    getCategorie(arg) {
      axios
        .get("https://dummyjson.com/products/category/" + arg)
        .then((res) => {
          this.prodTitel = arg
          this.getCatProd = res.data.products;
        });
    },
    /* Single Product */
    async getSingleProduct(prodId) {
      this.imageCounter = 0;
      await axios.get("https://dummyjson.com/products/" + prodId).then((res) => {
        this.singleProd = res.data;
        this.singleProdImg = res.data.images;
      });
      this.getRalativeProduct()
    },
    async getRalativeProduct() {
      window.scrollTo({ top: 300, behavior: "smooth" });
      await axios.get(this.baseUrl + "category/" + this.sigleProdData.category).then((res) => {
        this.relativeProdArr = res.data.products;
      });
    },
    imageCounterIncresa() {
      if (this.imageCounter == this.singleProdImg.length - 1) {
        this.imageCounter = 0;
      } else if (this.imageCounter < this.singleProdImg.length) {
        this.imageCounter++;
      } else {
        this.imageCounter--;
      }
    },
  },
  getters: {
    /* Header Getters */
    slideTitel(state) {
      return (-state.slideNumber * 100 + "%");
    },
    /* Start page moving card  */
    movingCards(state) {
      return `translateX(-${this.counter * 310}px)`;
    },
    /* Category page */
    getProductCategory(state) {
      return state.getCatProd;
    },
    /* Single Products */
    sigleProdData(state) {
      return state.singleProd;
    },
    realativeProd(state) {
      return state.relativeProdArr;
    }
  }
})
