<template>
  <div>
     <caruselCar/>
     <carImgMarka/>
     <carMarka/>
     <div>
      <loading/>
     </div>
     <carProducts/>
  </div>
</template>


<script>

import caruselCar from 'src/components/caruselCar.vue'
import carImgMarka from 'src/components/carImgMarka.vue'
import carMarka from 'src/components/carMarka.vue'
import carProducts from 'src/components/carProducts.vue'

import loading from '../components/loading.vue'
  export default {
  components: { caruselCar, carImgMarka, carMarka,carProducts, loading },

  }
</script>

<style  scoped>

</style>
