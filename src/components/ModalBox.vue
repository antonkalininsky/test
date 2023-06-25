<script setup>
import { ref } from 'vue'

// VARS
const showModal = ref(false)

// FUNS
function triggerModal() {
    showModal.value = true
}

function handleOutsideClick(event) {
    if (event.target.className === 'modal') {
        showModal.value = false
    }
}

// EXPOSE
defineExpose({ triggerModal })
</script>
<template>
    <div class="modal" v-show="showModal" @click.stop="handleOutsideClick($event)">
        <div class="modal__content">test</div>
    </div>
</template>
<style scoped>
.modal {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal__content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 600px;
}
</style>
