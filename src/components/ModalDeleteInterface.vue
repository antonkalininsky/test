<script setup>
import { ref, watch } from 'vue'
import { useMainStore } from '../stores/main'

// STORE
const mainStore = useMainStore()

// EMITS
const emits = defineEmits(['closeMe'])

// PROPS
const props = defineProps(['id'])

// VARS
const name = ref('')

// WATCH
watch(
    () => props.id,
    () => {
        const buf = mainStore.getItemFromData(props.id)
        name.value = buf.title
    },
    {
        immediate: true
    }
)

// FUNS
function deleteItem() {
    mainStore.deleteItemFromData(props.id)
    emits('closeMe')
}
</script>
<template>
    <div class="interface">
        <h2 class="interface__header">Вы уверенны что хотите удалить пункт?</h2>
        <div class="interface__content">
                <div class="unit-name">{{ name }}</div>
        </div>
        <div class="interface__control">
            <button class="modal-button modal-button--red" @click.stop="deleteItem()">
                Удалить
            </button>
            <button @click.stop="emits('closeMe')" class="modal-button">Отмена</button>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/interfaces.css';
</style>
