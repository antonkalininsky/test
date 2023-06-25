<script setup>
import ModalBox from '../components/ModalBox.vue'
import TableRow from '../components/TableRow.vue'
import { useMainStore } from '../stores/main'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

// STORE
const mainStore = useMainStore()
const { data } = storeToRefs(mainStore)

// VARS
const modal = ref()
</script>

<template>
    <div class="main">
        <ModalBox ref="modal" />
        <div class="table">
            <div class="grid-row table__header">
                <div class="cell"></div>
                <div class="cell">Общее количество</div>
                <div class="cell">Фактическое количество</div>
                <div class="cell">Действия</div>
            </div>
            <TableRow :data="data" :depth="0" />
        </div>
        <button class="button my-a" style="display: block" @click.stop="modal.triggerModal()">
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
