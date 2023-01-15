<template>
  <div v-if="store.error">
    <Error/>
  </div>
  <div v-if="!store.error">
     <caruselCar/>
     <carImgMarka/>
     <carMarka/>
     
     <carProducts/>
  </div>
</template>



<script setup>

import caruselCar from 'src/components/caruselCar.vue'
import carImgMarka from 'src/components/carImgMarka.vue'
import carMarka from 'src/components/carMarka.vue'
import carProducts from 'src/components/carProducts.vue'
import {useCounterStore} from '../stores/index'
import loading from '../components/loading.vue'
import Error from 'src/components/error.vue'
  const store = useCounterStore()
</script>

<style  scoped>

</style>
