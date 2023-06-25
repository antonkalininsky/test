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
const value = ref('')
const errorMsg = ref(false)

// WATCH
watch(
    () => props.id,
    () => {
        const buf = mainStore.getItemFromData(props.id)
        name.value = buf.title
        value.value = buf.value
    },
    {
        immediate: true
    }
)

// FUNS
function isNumber(event) {
    const regex = /[0-9]/
    if (!regex.test(event.key)) {
        event.returnValue = false
        if (event.preventDefault) event.preventDefault()
    }
}

function updateItem() {
    if (name.value === '' || value.value === '') {
        errorMsg.value = true
        return
    }
    errorMsg.value = false
    mainStore.updateItem(props.id, name.value, Number(value.value))
    emits('closeMe')
}
</script>
<template>
    <div class="interface">
        <h2 class="interface__header">Изменить пункт</h2>
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
            <button class="modal-button" @click.stop="updateItem()">Обновить</button>
            <button @click.stop="emits('closeMe')" class="modal-button modal-button--red">
                Отмена
            </button>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/interfaces.css';
</style>
