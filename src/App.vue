<script>
import Navbar from "@/shared/component/nav.component.vue";
export default {
  components: {
    Navbar,
  },

}
</script>

<template>
  <header>
    <Navbar/>
    <RouterView/>
  </header>

</template>



<style>

</style>
