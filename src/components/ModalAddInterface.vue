<script setup>
import { ref } from 'vue'
import { useMainStore } from '../stores/main'

// STORE
const mainStore = useMainStore()

// VARS
const name = ref('')
const value = ref('')
const errorMsg = ref(false)

// EMITS
const emits = defineEmits(['closeMe'])

// FUNS
function isNumber(event) {
    const regex = /[0-9]/
    if (!regex.test(event.key)) {
        event.returnValue = false
        if (event.preventDefault) event.preventDefault()
    }
}

function addNewItem() {
    if (name.value === '' || value.value === '') {
        errorMsg.value = true
        return
    }
    errorMsg.value = false
    mainStore.addNewItem(null, name.value, value.value)
    name.value = ''
    value.value = ''
    emits('closeMe')
}
</script>
<template>
    <div class="interface">
        <h2 class="interface__header">Добавить новый пункт</h2>
        <div class="interface__content">
            <div>
                <div>Название</div>
                <input class="input" type="text" v-model="name" />
                <div v-show="errorMsg" class="error-msg">Заполните оба поля</div>
            </div>
            <div>
                <div>Количество</div>
                <input class="input" type="text" @keypress="isNumber($event)" v-model="value" />
                <div v-show="errorMsg" class="error-msg">Заполните оба поля</div>
            </div>
        </div>
        <div class="interface__control">
            <button class="modal-button" @click.stop="addNewItem()">Добавить</button>
            <button @click.stop="emits('closeMe')" class="modal-button modal-button--red">
                Отмена
            </button>
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
