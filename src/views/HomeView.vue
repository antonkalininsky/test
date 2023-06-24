<script setup>
import TableRow from '../components/TableRow.vue'
import { ref, computed } from 'vue'

// VARS
const data = ref([
  {
    title: 'Нур-Султан',
    value: 15,
    children: []
  },
  {
    title: 'Алматы',
    value: 15,
    children: [
      {
        title: 'Управление 1',
        value: 15,
        children: [
          {
            title: 'Отдел 1',
            value: 15,
            children: []
          },
          {
            title: 'Отдел 2',
            value: 15,
            children: []
          }
        ]
      },
      {
        title: 'Управление 2',
        value: 15,
        children: []
      }
    ]
  },
  {
    title: 'Актау',
    value: 5,
    children: []
  }
])
</script>

<template>
  <div class="main">
    <table class="table">
      <thead class="table__header">
        <th class=""></th>
        <th>Общее количество</th>
        <th>Фактическое количество</th>
        <th>Действия</th>
      </thead>
      <tbody>
        <TableRow :data="data" />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.main {
  width: 70vw;
  margin-inline: auto;
}

.table {
  width: 100%;
}

.table th {
  padding: 10px 20px;
}

.table__header {
  background-color: #2d3e50;
  color: white;
}

.table__header th {
  text-align: start;
}

.table__header th:nth-child(1) {
  width: 40%;
}
</style>
