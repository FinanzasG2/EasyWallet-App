<script>
import Navbar from "@/shared/component/nav.component.vue";
export default {
  components: {
    Navbar,
  },

}
</script>

<template>
  <pv-toast />
    <Navbar/>
<div>
  <RouterView/>
</div>


</template>



<style>

</style>
