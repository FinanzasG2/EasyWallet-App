<script>
import TableReportComponent from "@/report/components/report-form.component.vue";

export default {
  name: "ReportPage",
  components: {
    TableReportComponent
  }
};
</script>

<template>
  <div>
    <h1>VISUALIZACIÓN DEL REPORTE</h1>
    <div class="table-container">
      <TableReportComponent />
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #39869E;
}

.table-container {
  padding: 20px;
}
</style>
