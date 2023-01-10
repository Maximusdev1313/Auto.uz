<template>
  <div class="q-mt-lg">
      <div class="title text-h4 text-weight-bolder">
         Купить автомобиль
      </div>
      <div class="row justify-center">
        <div class="carbuy q-pa-md  q-col-gutter-xs row shadow-10 q-mt-xl">
          <div class=" w-350px " >
            <div class="w-100pr">
              <q-select outlined v-model="marka.name" :options="marka.options" label="Marka" />
            </div>
            <div class="w-100pr mt-20px">
              <q-select outlined v-model="pakaleniya.name" :options="pakaleniya.options" label="Pakaleniyasi" />
            </div>
            <div class=" select__year row w-100pr mt-20px justify-between">
              <div class="w-50pr">
                <q-select  outlined v-model="yil.start" :options="yil.options" label="Yili dan " />
              </div>
              <div class="w-50pr">
                <q-select outlined v-model="yil.end" :options="yil.options" label="Yili gacha" />
              </div>
            </div>
          </div>

          <div class=" w-350px ml-50px " >
            <div class="w-100pr">
              <q-select outlined v-model="model.name" :options="model.options" label="Model" />
            </div>

            <div class="w-100pr mt-20px">
              <q-select outlined v-model="manzil.name" :options="manzil.options" label="Manzili" />
            </div>

            <div class="row w-100pr mt-20px justify-between">
              <q-input type="number" class="w-50pr inp_start" square outlined  v-model="prince_start" label="Narxi dan So'm " />
              <q-input type="number" class="w-50pr inp_end" square outlined  v-model="prince_end" label="Narxi gacha" />

            </div>

          </div>

          <div class=" content  mt-20px ml-50px">
            <div>
              <router-link to="" >
                Сбросить <q-icon name="close" />
              </router-link>
            </div>
            <div class="mt-51px">
              <q-btn class="bg-blue text-white " no-caps  flat>Hozircha 10550 ta</q-btn>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script setup>
 import { ref, watch } from 'vue'
 import { useCounterStore } from "src/stores/index";
 const store = useCounterStore()
  store.getApiCategory()
  let prince_start = ref()
  let prince_end = ref()
  const  marka = ref({
    name:'',
    options:['Barchasi']
  })
  const  model = ref({
    name:'',
    options:['Barchasi','Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
  })
  const  pakaleniya = ref({
    name:'',
    options:['Barchasi','Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
  })
  const  manzil = ref({
    name:'',
    options:['Barchasi','Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
  })
  const  yil = ref({
    start:'',
    end:'',
    options:['Barchasi','Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
  })




  let GetTesting = setInterval(() => {
    if(store.categories.length>0){
      console.log( store.categories )
      store.categories.some(element => {
        marka.value.options.push(element.category_name)
        console.log(marka.value.options);
      });
      clearInterval(GetTesting);
    }
  }, 200);

</script>

<style scoped>

a{
  text-decoration: none;
  color: rgb(102, 100, 100);
  font-size: 18px;
  transition: 0.2s;
}
a:hover{
  color: red;

}
.carbuy{
  width: 80%;
  height: auto;
  background: #fff;
  border-radius: 10px;
}
@media screen and (max-width:1200px) {
  .carbuy{
    width: 100%;
  }
}
@media screen and (max-width:1000px) {
  .carbuy{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .content{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .mt-51px{
    margin: 0;
  }
  .w-350px{
    width: 320px;
  }
}
</style>
