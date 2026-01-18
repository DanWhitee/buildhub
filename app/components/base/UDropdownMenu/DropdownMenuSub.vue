<template>
  <dropdown-menu-sub
    #default="slotProps"
    data-slot="dropdown-menu-sub"
    v-bind="forwarded"
  >
    <slot v-bind="slotProps"></slot>
  </dropdown-menu-sub>
</template>

<script setup lang="ts">
import type { DropdownMenuSubEmits, DropdownMenuSubProps } from 'reka-ui'
import {
  DropdownMenuSub,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<DropdownMenuSubProps>()
const emits = defineEmits<DropdownMenuSubEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
