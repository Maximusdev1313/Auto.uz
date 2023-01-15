import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    cars: [],
    cars_no_change: [],
    cars_filter: [],
    categories: [],
    limit: [],
    loading: true,
    error: false

  }), 


  actions: {
    async getApi() {
      try {

        let res = await axios.get("http://autouz.pythonanywhere.com/productlar/")
        this.cars = res.data
        this.cars_no_change = [...this.cars]
        this.cars_filter = [...this.cars]

        this.limit = [...this.cars]
        this.cars.length >= 6 ? this.limit.length = 6 : this.limit
        this.loading = false
        console.log(this.limit);

      } catch (error) {
        this.error = true

      }
    },
    async getApiCategory() {
      try {
        let res = await axios.get("http://autouz.pythonanywhere.com/categoriya/")
        this.categories = res.data
        this.loading = false
        
      } catch (error) {
        this.error = true
      }
    },

    log() {
      console.log("ishladi");
    }

  },

  getters: {
    MarkaFilter() {

    }

  },
});



export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
