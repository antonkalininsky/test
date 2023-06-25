<script setup>
import { ref } from 'vue'
import ModalAddInterface from './ModalAddInterface.vue'
import ModalDeleteInterface from './ModalDeleteInterface.vue'
import ModalUpdateInterface from './ModalUpdateInterface.vue'

// CONST
const interfaces = {
    add: ModalAddInterface,
    delete: ModalDeleteInterface,
    update: ModalUpdateInterface
}

// VARS
const showModal = ref(false)
const mode = ref('')
const id = ref(null)

// FUNS
function triggerModal(shownMode = '', shownId = null) {
    mode.value = shownMode
    id.value = shownId
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
    <Transition name="modal-bg">
        <div class="modal" v-show="showModal" @click.stop="handleOutsideClick($event)">
            <Transition name="modal-open">
                <div class="modal__content" v-show="showModal">
                    <component :is="interfaces[mode]" @close-me="showModal = false" :id="id" />
                </div>
            </Transition>
        </div>
    </Transition>
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
    width: 500px;
}

.modal-open-enter-active,
.modal-open-leave-active,
.modal-bg-enter-active,
.modal-bg-leave-active {
    transition: all 0.2s linear;
}

.modal-bg-enter-from,
.modal-bg-leave-to {
    opacity: 0;
}

.modal-open-enter-from,
.modal-open-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
