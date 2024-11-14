<script>
import LetterListComponent from "@/management/components/letter-list.component.vue";
export default {
  name: 'letter',
  components: {LetterListComponent}
}
</script>

<template>
  <h1>VISUALIZAR LETRAS</h1>
  <div class="form-container">
    <letter-list-component/>
  </div>
</template>

<style scoped>

</style>