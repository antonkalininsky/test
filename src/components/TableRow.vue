<script setup>
import ModalBox from './ModalBox.vue'
import { ref, watch } from 'vue'

// VARS
const showChildren = ref([])
const modal = ref()

// PROPS
const props = defineProps(['data', 'depth'])

// WATCH
watch(
    () => props.data,
    () => {
        showChildren.value = new Array(props.data.length).fill(false)
    },
    {
        immediate: true
    }
)

// FUNS
function calcOpacity(depth) {
    let opacity = depth / 10
    if (opacity > 1) return 1
    if (opacity < 0) return 0
    return opacity
}

function calcChildrenValue(data) {
    if (data.children.length === 0) return data.value
    return data.value + data.children.reduce((accum, curr) => accum + calcChildrenValue(curr), 0)
}

function updateItem() {
    // modal.value.triggerModal()
    // todo
}

function deleteItem(id) {
    modal.value.triggerModal('delete', id)
    // todo
}

function addSubItem(id) {
    modal.value.triggerModal('add', id)
}
</script>
<template>
    <div>
        <ModalBox ref="modal" />
        <div v-for="(item, index) in props.data" :key="item.id">
            <div class="grid-row pointer table-row" @click.stop="showChildren[index] = !showChildren[index]">
                <div class="cell">
                    <button
                        @click.stop="showChildren[index] = !showChildren[index]"
                        v-if="item.children.length > 0"
                        class="button"
                    >
                        <span v-show="showChildren[index]">
                            <mdicon name="chevron-down" width="20" height="20" />
                        </span>
                        <span v-show="!showChildren[index]">
                            <mdicon name="chevron-right" width="20" height="20" />
                        </span>
                    </button>
                    {{ item.title }}
                </div>
                <div class="cell">{{ calcChildrenValue(item) }}</div>
                <div class="cell">{{ item.value }}</div>
                <div class="cell">
                    <button class="button" @click.stop="updateItem()">
                        <mdicon name="pencil" width="20" height="20" />
                    </button>
                    <button class="button" @click.stop="deleteItem(item.id)">
                        <mdicon name="close-thick" width="20" height="20" />
                    </button>
                    <button class="button" @click.stop="addSubItem(item.id)">
                        <mdicon name="plus-thick" width="20" height="20" />
                    </button>
                </div>
            </div>
            <Transition name="children-open">
                <TableRow
                    :data="item.children"
                    :depth="props.depth + 1"
                    v-show="showChildren[index]"
                    class="children"
                    :style="{
                        'background-color': `rgba(135, 159, 255, ${calcOpacity(props.depth + 1)})`
                    }"
                />
            </Transition>
        </div>
    </div>
</template>
<style scoped>
.table-row {
    border-bottom: 1px solid rgb(207, 207, 207);
}

.table-row:hover {
    border-bottom: 1px solid rgb(90, 90, 90);
}

.children {
    padding-left: 20px;
}

.children-open-enter-active,
.children-open-leave-active {
    transition: all 0.2s linear;
}

.children-open-enter-from,
.children-open-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
