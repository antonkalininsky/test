import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    // VARS
    const count = ref(9)
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

    // FUNS
    function addNewItemToData(parentId = null, title, value) {
        if (parentId === null) {
            data.value.push({
                id: count.value,
                title,
                value,
                children: []
            })
            count.value++
            return
        }
        addNewItem(data.value, parentId, title, value)
    }

    function addNewItem(data, parentId, title, value) {
        for (let item of data) {
            if (item.id === parentId) {
                item.children.push({
                    id: count.value,
                    title,
                    value,
                    children: []
                })
                count.value++
                return
            }
            addNewItem(item.children, parentId, title, value)
        }
    }

    function deleteItem(data, id) {
        for (let item of data) {
            if (item.id === id) {
                data.splice(data.indexOf(item), 1)
                return
            }
            deleteItem(item.children, id)
        }
    }

    function deleteItemFromData(id) {
        deleteItem(data.value, id)
    }

    function getItem(data, id) {
        for (let item of data) {
            if (item.id == id) {
                return item
            }
            const buf = getItem(item.children, id)
            if (buf !== false) return buf
        }
        return false
    }

    function getItemFromData(id) {
        return getItem(data.value, id)
    }

    return { data, addNewItemToData, deleteItemFromData, getItemFromData }
})
