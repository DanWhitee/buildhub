<template>
  <div
    :class="cn(badgeVariants({ variant }), props.class)"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { UBadgeVariants } from '.'
import { cn } from '@/lib/utils'
import { badgeVariants } from '.'

interface Props {
  variant?: UBadgeVariants['variant']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>
