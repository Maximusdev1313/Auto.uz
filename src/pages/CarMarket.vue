<template>
  <div>
    <Error/>
      <div class="container" v-if="!store.error">
          <div class="content">
            <filterCar/>
            <div class="mt-50px">
              <CarCard/>
            </div>
          </div>

      </div>
  </div>
</template>

<script setup>
import filterCar from '../components/car-market/filterCar.vue';
import CarCard from 'src/components/car-market/CarCard.vue';
import Error from 'src/components/error.vue'
import { useCounterStore } from 'src/stores';
const store = useCounterStore()
</script>

<style  scoped>
.container{
  width: 100%;
}
.content{
  margin: 15px;

}
</style>
