<template>
  <u-dropdown-menu>
    <u-dropdown-menu-trigger as-child>
      <u-button variant="outline">
        <icon
          icon="radix-icons:moon"
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <icon
          icon="radix-icons:sun"
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </u-button>
    </u-dropdown-menu-trigger>
    <u-dropdown-menu-content align="end">
      <u-dropdown-menu-item @click="colorMode.preference = 'light'">
        Light
      </u-dropdown-menu-item>
      <u-dropdown-menu-item @click="colorMode.preference = 'dark'">
        Dark
      </u-dropdown-menu-item>
      <u-dropdown-menu-item @click="colorMode.preference = 'system'">
        System
      </u-dropdown-menu-item>
    </u-dropdown-menu-content>
  </u-dropdown-menu>
</template>

<script setup lang="ts">
import { useColorMode } from '#imports'
import { Icon } from '@iconify/vue'
import { UButton, UDropdownMenu, UDropdownMenuContent, UDropdownMenuItem, UDropdownMenuTrigger } from '@/components/base'

const colorMode = useColorMode()
</script>
