<template>
  <u-button
    variant="ghost"
    size="icon"
    class="h-9 w-9 text-text-muted hover:bg-transparent relative"
  >
    <img
      src="/icons/cart.svg"
      alt="Cart"
      class="w-4 h-4"
    >
    <u-badge
      variant="red"
      class="absolute -top-1 -right-1 min-w-5 h-5 flex items-center justify-center p-0 text-xs font-medium"
    >
      1
    </u-badge>
  </u-button>
</template>

<script setup lang="ts">
import { UBadge, UButton } from '@/components/base'
</script>
