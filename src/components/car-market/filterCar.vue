<template>
  <div class="q-mt-lg">
      <div class="title text-h4 text-weight-bolder">
         Купить автомобиль
      </div>
      <div class="row justify-center">
        <div class="carbuy q-pa-md  q-col-gutter-xs row shadow-10 q-mt-xl">
          <div class=" w-350px " >
            <div class="w-100pr">
              <q-select outlined v-model="marka_name" :options="marka" label="Marka" />
            </div>
            <div class="w-100pr mt-20px">
              <q-select outlined v-model="pakaleniya_name" :options="pakaleniya" label="Pakaleniyasi" />
            </div>
            <div class=" select__year row w-100pr mt-20px justify-between">
              <div class="w-50pr">
                <q-select  outlined v-model="year_start" :options="year" label="Yili dan " />
              </div>
              <div class="w-50pr">
                <q-select outlined v-model="year_end" :options="year" label="Yili gacha" />
              </div>
            </div>
          </div>

          <div class=" w-350px ml-50px " >
            <div class="w-100pr">
              <q-select outlined v-model="model_name" :options="model" label="Model" />
            </div>

            <div class="w-100pr mt-20px">
              <q-select outlined v-model="address_name" :options="address" label="Manzili" />
            </div>

            <div class="w-100pr mt-20px">
              <div>
                <q-range
                  v-model="step"
                  :min="0"
                  :max="500"
                  :step="10"
                />
              </div>
              <div class="row w-100pr  justify-between">
                <div>
                  {{ step.min }} mln
                </div>
                <div>
                  {{ step.max }} mln
                </div>
              </div>
            </div>

          </div>

          <div class=" content  mt-20px ml-5px">
            <div>
              <router-link to="" >
                Сбросить <q-icon name="close" />
              </router-link>
            </div>
            <div class="mt-51px">
              <q-btn class="bg-blue text-white " no-caps  flat>Hozircha {{store.cars_filter.length}} ta</q-btn>
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

  let  step = ref({
    min: 0,
    max: 500
  })



  let marka_name = ref('')
  const  marka = ref(['Barchasi'])

  let model_name = ref()
  const  model = ref(['Barchasi'])

  let pakaleniya_name = ref()
  const  pakaleniya = ref(['Barchasi','Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'])

  let address_name = ref()
  const  address = ref(['Barchasi'])

  let year_start = ref()
  let year_end = ref()
  const  year = ref(['Barchasi','Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'])





  let GetTesting = setInterval(() => {
    if(store.categories.length>0){
      store.categories.some(elem => {
        marka.value.push(elem.category_name)
      });
      GetAddress()
      clearInterval(GetTesting);
    }
  }, 200);
let cars_marka = []
  watch(marka_name , ()=>{
    model_name.value=''
    pakaleniya_name.value=''
    address_name.value=''
    year_start.value=''
    year_end.value=''

    if(marka_name.value=="Barchasi"){
      store.cars_filter=[...store.cars_no_change]
      cars_marka = [...store.cars_no_change]
    }
    else{
      store.categories.forEach(elem => {
        if (elem.category_name==marka_name.value) {
          store.cars_filter=[...elem.mahsulot]
        }
      });
      cars_marka = [...store.cars_filter]
      GetMarka()
      GetAddress()
    }
  })
let cars_model = []
  watch(model_name , ()=>{
    store.log()
    pakaleniya_name.value=''
    address_name.value=''
    year_start.value=''
    year_end.value=''

    if(model_name.value.length>0){
      if(model_name.value=="Barchasi"){
        store.cars_filter=[...cars_marka]
        cars_model=[...cars_marka]
      }
      else{
        store.cars_filter=[]
        cars_marka.forEach(elem => {
          if (elem.car_name==model_name.value) {
            store.cars_filter.push(elem)
          }
        });
        cars_model=[...store.cars_filter]
        GetAddress()
      }
    }
  })

  watch(address_name , ()=>{
    if(address_name.value.length>0){
      if(cars_model.length>0){
        if (address_name.value=="Barchasi")
        store.cars_filter=cars_model
        else{
          store.cars_filter=[]
          cars_model.forEach(elem => {
            if (elem.city == address_name.value) {
              store.cars_filter.push(elem)
            }
          });
        }
      }
      else if(cars_marka.length>0){
        if (address_name.value=="Barchasi")
        store.cars_filter=cars_marka
        else{
          store.cars_filter=[]
          cars_marka.forEach(elem => {
            if (elem.city == address_name.value) {
              store.cars_filter.push(elem)
            }
          });
        }
      }
      else {
        if (address_name.value=="Barchasi")
        store.cars_filter=store.cars_no_change
        else{
          store.cars_filter=[]
          store.cars_no_change.forEach(elem => {
            if (elem.city == address_name.value) {
              store.cars_filter.push(elem)
            }
          });
        }
      }
      GetMarka()
    }
  })

  let GetMarka = () =>{
    model.value = ['Barchasi']
    cars_marka.forEach(elem =>{
      model.value.push(elem.car_name)
    })
    model.value=[ ... new Set(model.value)]
  }
  let GetAddress = () =>{
    address.value = ['Barchasi']
    store.cars_filter.forEach(elem =>{
      address.value.push(elem.city)
    })
    address.value=[ ... new Set(address.value)]
  }


  cars_marka = [...store.cars_no_change]


  let aaa = (a , b , c , d ) =>{
    a.forEach(elem => {
      if (elem[b] == c) {
        console.log("bbbbb");
        d.push(elem)
      }
    });
  }
  address_name.value = "ferghana"

  aaa( cars_marka , 'city' ,  address_name.value , store.cars_filter )

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
.content{
    margin: 20px 0 0 50px ;
  }
@media screen and (max-width:1200px) {
  .carbuy{
    width: 100%;
  }
}
@media screen and (max-width:1050px) {
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
  .ml-50px{
    margin: 0;
  }
  .w-350px{
    width:45%;
  }
}
@media screen and (max-width:700px) {
  .w-350px{
    width:49%;
  }
}
</style>
