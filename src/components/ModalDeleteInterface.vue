<script setup>
import { ref } from 'vue'
import { useMainStore } from '../stores/main'

// STORE
const mainStore = useMainStore()

// EMITS
const emits = defineEmits(['closeMe'])

// PROPS
const props = defineProps(['id'])

// FUNS
function deleteItem() {
    mainStore.deleteItemFromData(props.id)
    // console.log(props.id)
    // if (name.value === '' || value.value === '') {
    //     errorMsg.value = true
    //     return
    // }
    // errorMsg.value = false
    // mainStore.addNewItemToData(props.id, name.value, Number(value.value))
    // name.value = ''
    // value.value = ''
    emits('closeMe')
}
</script>
<template>
    <div class="interface">
        <h2 class="interface__header">Вы уверенны что хотите удалить пункт?</h2>
        <div class="interface__content">
            <div>
                <div>Название</div>
            </div>
            <div>
                <div>Количество</div>
            </div>
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
.input {
    padding: 5px;
}
.interface {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.interface__header {
    margin-bottom: 10px;
}
.interface__content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
}

.interface__control {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.modal-button {
    display: block;
    cursor: pointer;
    background-color: rgb(137, 137, 137);
    color: #fafafa;
    font-size: 16px;
    border-radius: 999px;
    border: none;
    padding: 5px 10px;

    transition: background-color 0.2s linear;
}

.modal-button:hover {
    background-color: rgb(77, 77, 77);
}

.modal-button--red {
    background-color: rgb(220, 68, 68);
}

.modal-button--red:hover {
    background-color: rgb(165, 28, 28);
}

.error-msg {
    font-size: 12px;
    color: red;
}
</style>
