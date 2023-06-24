<script setup>
// import TableRow from './TableRow.vue'

// PROPS
const props = defineProps(['data'])
</script>
<template>
  <template v-for="item in props.data">
    <tr class="row">
      <td><button>></button>{{ item.title }}</td>
      <td>calc value</td>
      <td>{{ item.value }}</td>
      <td>CRUD</td>
    </tr>
    <TableRow :data="item.children"/>
  </template>
</template>
<style scoped>
.row td {
  padding: 10px 20px;
}
</style>
