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
            <div v-show="data.length === 0" class="empty-msg">Данные не найдены</div>
        </div>
        <button
            class="button button-new"
            @click.stop="modal.triggerModal('add', null)"
        >
            <mdicon name="plus-thick" width="20" height="20" />
        </button>
    </div>
</template>

<style scoped>
.button-new {
    display: block;
    margin-inline: auto;
}
.empty-msg {
    font-weight: 600;
    margin-inline: auto;
}

.main {
    min-width: 880px;
    width: 80vw;
    margin-inline: auto;
}

.table {
    width: 100%;
    margin-bottom: 10px;
}

.table th {
    padding: 10px 20px;
}

.table__header {
    background-color: #2d3e50;
    color: white;
}

.table__header .cell {
    border-left: 1px solid #fafafa;
}

.table__header th {
    text-align: start;
}

.cell {
    padding: 10px 20px;
    text-align: start;
}
</style>
