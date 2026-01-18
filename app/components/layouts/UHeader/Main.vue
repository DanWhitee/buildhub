<template>
  <header class="bg-header-bg">
    <u-container>
      <div class="border-b border-nav-border">
        <div class="flex items-center justify-between h-16 gap-3">
          <div class="flex items-center gap-3">
            <u-button
              variant="ghost"
              size="icon"
              class="text-brand-yellow hover:bg-transparent"
            >
              <img
                src="/icons/menu.svg"
                alt="Menu"
                class="w-9 h-9"
              >
            </u-button>
            <a
              href="/"
              class="flex items-center gap-2"
            >
              <img
                src="/icons/logo.svg"
                alt="Logo"
                class="w-10 h-10"
              >
              <div class="flex flex-col">
                <span class="text-brand-yellow text-xs font-normal uppercase tracking-[0.05em] leading-tight">
                  ЛЕ-МАНА
                </span>
                <span class="text-text-muted text-[10px] font-normal leading-[15px] tracking-[0.01171875em]">
                  ПРО
                </span>
              </div>
            </a>
          </div>

          <div class="flex-1 max-w-[672px] relative">
            <div class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src="/icons/search.svg"
                alt="Search"
                class="w-4 h-4"
              >
            </div>
            <u-input
              placeholder="Поиск"
              class="w-full h-9 pl-10 pr-3 bg-input-bg border-input-border text-text-muted placeholder:text-text-muted focus-visible:ring-0"
            />
          </div>

          <div class="flex items-center gap-2">
            <u-dropdown-menu>
              <u-dropdown-menu-trigger as-child>
                <u-button
                  variant="ghost"
                  class="h-9 px-0 gap-2 text-text-muted hover:bg-transparent"
                >
                  <span class="text-xs font-medium">Город</span>
                  <img
                    src="/icons/chevron-down.svg"
                    alt=""
                    class="w-4 h-4"
                  >
                  <span class="text-sm font-medium text-white">Воронеж</span>
                </u-button>
              </u-dropdown-menu-trigger>
              <u-dropdown-menu-content>
                <u-dropdown-menu-item>
                  Москва
                </u-dropdown-menu-item>
                <u-dropdown-menu-item>
                  Санкт-Петербург
                </u-dropdown-menu-item>
                <u-dropdown-menu-item>
                  Воронеж
                </u-dropdown-menu-item>
              </u-dropdown-menu-content>
            </u-dropdown-menu>

            <u-button
              variant="ghost"
              size="icon"
              class="h-9 w-9 text-text-muted hover:bg-transparent"
            >
              <img
                src="/icons/user.svg"
                alt="Account"
                class="w-9 h-9"
              >
            </u-button>

            <u-header-action-cart />
          </div>
        </div>
      </div>

      <nav>
        <div class="flex items-center gap-6 h-11">
          <nuxt-link
            to="/catalog"
            class="text-sm font-normal text-nav-link hover:text-white transition-colors"
          >
            Каталог
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="text-sm font-normal text-nav-link hover:text-white transition-colors"
          >
            О компании
          </nuxt-link>
          <nuxt-link
            to="/delivery"
            class="text-sm font-normal text-nav-link hover:text-white transition-colors"
          >
            Доставка и оплата
          </nuxt-link>
          <nuxt-link
            to="/contacts"
            class="text-sm font-normal text-nav-link hover:text-white transition-colors"
          >
            Контакты
          </nuxt-link>
        </div>
      </nav>
    </u-container>
  </header>
</template>

<script setup lang="ts">
import {
  UButton,
  UDropdownMenu,
  UDropdownMenuContent,
  UDropdownMenuItem,
  UDropdownMenuTrigger,
  UInput,
} from '@/components/base'
import { UContainer } from '@/components/templates'
import { UHeaderActionCart } from './components'
</script>
