<script setup lang="ts">
import Nav from './components/Nav.vue'
import Intro from './components/Intro.vue'
import Footer from './components/Footer.vue'
import Core from './components/Core.vue'
import Work from './components/Work.vue'
// import { getDataset,postDataset,getDatasetAll,getDatasetById, delDataset, putDataset } from './api/dataset';
import { useUuidStore } from './store/uuidStore'
import { onMounted } from 'vue'

const uuidStore = useUuidStore()

onMounted(() => {
  uuidStore.generateUuid()
})

</script>

<template>

  <Nav />
  <!-- <Intro />  -->
  <!-- <Core /> -->
  <!-- <Work /> -->
  <!-- <Footer /> -->
  <div>
    Your UUID is: {{ uuidStore.uuid }}
    是否是新用户 is: {{ uuidStore.flag }}

  </div>


</template>

<style scoped>

</style>
