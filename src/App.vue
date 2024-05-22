<script setup lang="ts">
import Nav from './components/Nav.vue'
import Intro from './components/Intro.vue'
import Footer from './components/Footer.vue'
import CoreSingle from './components/CoreSingle.vue'
import CoreMultiple from './components/CoreMultiple.vue'

import Work from './components/Work.vue'
// import { getDataset,postDataset,getDatasetAll,getDatasetById, delDataset, putDataset } from './api/dataset';
import { useUuidStore } from './store/uuidStore'
import { onMounted, ref,computed } from 'vue'

const uuidStore = useUuidStore()

const showCoreSingle = ref(true)
const coreSingle = ref(true)
const coreMultiple = ref(true)



const currentComponent = computed(() => {
  return showCoreSingle.value ? CoreSingle : CoreMultiple
})

const toggleComponent = () => {
  showCoreSingle.value = !showCoreSingle.value
  
}


onMounted(() => {
  uuidStore.generateUuid()
})

</script>

<template>

  <Nav @toggleMultiple="toggleComponent"/>
  <Intro /> 
  <!-- <component :is="CoreSingle"></component>
  <component :is="CoreMultiple"></component> -->

  <!-- <button @click="toggleComponent">切换组件</button> -->
    <component :is="currentComponent"></component>

  <Work />


  <Footer />
  <div>
    Your UUID is: {{ uuidStore.uuid }}
    是否是新用户 is: {{ uuidStore.flag }}

  </div>


</template>

<style scoped>

</style>
