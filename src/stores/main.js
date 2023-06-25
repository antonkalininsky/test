import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const count = ref(0)
    const data = ref([
        {
            id: 0,
            title: 'Нур-Султан',
            value: 15,
            children: []
        },
        {
            id: 1,
            title: 'Алматы',
            value: 15,
            children: [
                {
                    id: 2,
                    title: 'Управление 1',
                    value: 15,
                    children: [
                        {
                            id: 3,
                            title: 'Отдел 1',
                            value: 15,
                            children: []
                        },
                        {
                            id: 4,
                            title: 'Отдел 2',
                            value: 15,
                            children: []
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'Управление 2',
                    value: 15,
                    children: []
                }
            ]
        },
        {
            id: 6,
            title: 'Актау',
            value: 5,
            children: [
                {
                    id: 7,
                    title: 'Отдел 1',
                    value: 15,
                    children: []
                },
                {
                    id: 8,
                    title: 'Отдел 2',
                    value: 15,
                    children: []
                }
            ]
        }
    ])

    return { data }
})
