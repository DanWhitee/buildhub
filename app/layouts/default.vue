<template>
  <u-header />
  <main>
    <slot></slot>
  </main>
  <u-footer />
</template>

<script setup lang="ts">
import { UFooter, UHeader } from '@/components/layouts'
</script>
