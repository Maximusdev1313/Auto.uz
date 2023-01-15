<template>
    <div v-if="store.loading" class="wrapper">
        <q-spinner-gears
        color="purple"
        size="4em"
      />
    </div>
</template>

<script setup>
import { useCounterStore } from 'src/stores/index';

const store = useCounterStore()

</script>
<style scoped>
.wrapper{
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>