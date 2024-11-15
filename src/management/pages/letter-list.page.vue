<script>
import LetterListComponent from "@/management/components/letter-list.component.vue";
export default {
  name:"letter",
    components:{LetterListComponent},
}
</script>

<template>
  <h1>LISTAR LETRAS</h1>
  <div class="form-container">
    <letter-list-component/>
  </div>
</template>

<style scoped>

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #39869E;
}


</style>