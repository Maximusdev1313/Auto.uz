<template>
  <div>
    <div v-if="store.error" class="wrapper">
      <q-spinner-radio color="red" size="4em" />
      <div class="error">oops.. <br/> something went wrong! <br> please reload page </div>
        <q-btn @click="this.$router.go(this.$router.currentRoute)" outline color="red" >reload  </q-btn>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "src/stores";

const store = useCounterStore();
</script>
<style scoped>
.wrapper{
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

}
.error{
    padding: 20px 0;
    color: red;
    text-transform: uppercase;
    font-size: larger;
    font-weight: bold;
}
</style>