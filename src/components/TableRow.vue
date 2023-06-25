<script setup>
import { ref, watch } from 'vue'

// VARS
const showChildren = ref([])

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
    // todo
}

function deleteItem() {
    // todo
}

function addSubItem() {
    // todo
}
</script>
<template>
    <div>
        <div v-for="(item, index) in props.data" :key="item.id">
            <div class="grid-row pointer" @click.stop="showChildren[index] = !showChildren[index]">
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
                    <button class="button" @click.stop="deleteItem()">
                        <mdicon name="close-thick" width="20" height="20" />
                    </button>
                    <button class="button" @click.stop="addSubItem()">
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
