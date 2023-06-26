import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
    // VARS
    const trigger = ref(false)
    const mode = ref('')
    const id = ref(null)

    return { trigger, mode, id }
})
