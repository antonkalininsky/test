<script setup>
import { ref, computed } from 'vue'

// VARS
const showChildren = ref(false)

// PROPS
const props = defineProps(['data', 'depth'])

// COMP
const totalValue = computed(() => {
  console.log('TEST')
  console.log(calcChildrenValue(props.data))
  return calcChildrenValue(props.data)
})

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
</script>
<template>
  <div>
    <div v-for="item in props.data" :key="item.title">
      <div class="grid-row">
        <div class="cell">
          <button @click="showChildren = !showChildren" v-if="item.children.length > 0" class="button">
            <span v-show="showChildren"><mdicon name="chevron-down" width="20" height="20" /></span>
            <span v-show="!showChildren"><mdicon name="chevron-right" width="20" height="20" /></span>
          </button>
          {{ item.title }}
        </div>
        <div class="cell">{{ calcChildrenValue(item) }}</div>
        <div class="cell">{{ item.value }}</div>
        <div class="cell">CRUD</div>
      </div>
      <Transition name="children-open">
        <TableRow
          :data="item.children"
          :depth="props.depth + 1"
          v-show="showChildren"
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
