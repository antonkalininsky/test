<script setup>
import TableRow from '../components/TableRow.vue'
import { ref } from 'vue'

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
  }
])
</script>

<template>
  <div class="main">
    <div class="table">
      <div class="grid-row table__header">
        <div class="cell"></div>
        <div class="cell">Общее количество</div>
        <div class="cell">Фактическое количество</div>
        <div class="cell">Действия</div>
      </div>
      <TableRow :data="data" :depth="0" />
    </div>
    <button class="button my-a" style="display: block">
      <mdicon name="plus-thick" width="20" height="20" />
    </button>
  </div>
</template>

<style scoped>
.main {
  width: 80vw;
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
</style>
