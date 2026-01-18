<template>
  <div class="min-h-screen bg-[#F9FAFB]">
    <!-- Product Grid Section -->
    <section class="py-16">
      <u-container>
        <!-- Header -->
        <div class="mb-8">
          <p class="text-sm font-normal text-[#6A7282] leading-[1.4285714285714286em] tracking-[-0.0107421875em] mb-2">
            ПОСТАВЛЯЕМ ДЛЯ ВАС
          </p>
          <h2 class="text-xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0224609375em]">
            Продукция компании
          </h2>
        </div>

        <!-- Product Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <!-- Roofing Card -->
          <div class="bg-white border border-black/10 rounded-[14px] overflow-hidden">
            <div class="border-b border-[#E5E7EB] px-6 py-6">
              <h3 class="text-base font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.01953125em]">
                Кровля кровельная система
              </h3>
            </div>
            <div class="p-6">
              <ul class="space-y-2 mb-6">
                <li
                  v-for="item in roofingItems"
                  :key="item"
                  class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]"
                >
                  {{ item }}
                </li>
              </ul>
              <div class="bg-gray-200 rounded-lg h-[272px]">
                <!-- Image placeholder -->
              </div>
            </div>
          </div>

          <!-- Facade Card -->
          <div class="bg-white border border-black/10 rounded-[14px] overflow-hidden">
            <div class="border-b border-[#E5E7EB] px-6 py-6">
              <h3 class="text-base font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.01953125em]">
                Фасад
              </h3>
            </div>
            <div class="p-6">
              <ul class="space-y-2 mb-6">
                <li
                  v-for="item in facadeItems"
                  :key="item"
                  class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]"
                >
                  {{ item }}
                </li>
              </ul>
              <div class="bg-gray-200 rounded-lg h-[272px]">
                <!-- Image placeholder -->
              </div>
            </div>
          </div>

          <!-- Fencing Card -->
          <div class="bg-white border border-black/10 rounded-[14px] overflow-hidden">
            <div class="border-b border-[#E5E7EB] px-6 py-6">
              <h3 class="text-base font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.01953125em]">
                Ограждения заборы
              </h3>
            </div>
            <div class="p-6">
              <ul class="space-y-2 mb-6">
                <li
                  v-for="item in fencingItems"
                  :key="item"
                  class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]"
                >
                  {{ item }}
                </li>
              </ul>
              <div class="bg-gray-200 rounded-lg h-[272px]">
                <!-- Image placeholder -->
              </div>
            </div>
          </div>

          <!-- Metal Products Card -->
          <div class="bg-white border border-black/10 rounded-[14px] overflow-hidden">
            <div class="border-b border-[#E5E7EB] px-6 py-6">
              <h3 class="text-base font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.01953125em]">
                Черный металлопрокат
              </h3>
            </div>
            <div class="p-6">
              <ul class="space-y-2 mb-6">
                <li
                  v-for="item in metalItems"
                  :key="item"
                  class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]"
                >
                  {{ item }}
                </li>
              </ul>
              <div class="bg-gray-200 rounded-lg h-[272px]">
                <!-- Image placeholder -->
              </div>
            </div>
          </div>

          <!-- Insulation Card -->
          <div class="bg-white border border-black/10 rounded-[14px] overflow-hidden">
            <div class="border-b border-[#E5E7EB] px-6 py-6">
              <h3 class="text-base font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.01953125em]">
                Утеплители гидро пароизоляция
              </h3>
            </div>
            <div class="p-6">
              <ul class="space-y-2 mb-6">
                <li
                  v-for="item in insulationItems"
                  :key="item"
                  class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]"
                >
                  {{ item }}
                </li>
              </ul>
              <div class="bg-gray-200 rounded-lg h-[272px]">
                <!-- Image placeholder -->
              </div>
            </div>
          </div>

          <!-- Drainage Card -->
          <div class="bg-white border border-black/10 rounded-[14px] overflow-hidden">
            <div class="border-b border-[#E5E7EB] px-6 py-6">
              <h3 class="text-base font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.01953125em]">
                Водосточные системы
              </h3>
            </div>
            <div class="p-6">
              <ul class="space-y-2 mb-6">
                <li
                  v-for="item in drainageItems"
                  :key="item"
                  class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]"
                >
                  {{ item }}
                </li>
              </ul>
              <div class="bg-gray-200 rounded-lg h-[272px]">
                <!-- Image placeholder -->
              </div>
            </div>
          </div>
        </div>

        <!-- Show All Button -->
        <div class="flex justify-center">
          <u-button
            class="bg-[#155DFC] text-white hover:bg-[#155DFC]/90 h-10 px-6 rounded-lg"
          >
            Показать все категории (12)
            <!-- Arrow icon placeholder -->
          </u-button>
        </div>
      </u-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { UButton } from '@/components/base'
import { UContainer } from '@/components/templates'

const roofingItems = [
  'Гибкая черепица',
  'Кровельная вентиляция',
  'Отделочные элементы кровли',
  'Системы безопасности кровли',
  'Крепежные элементы',
  'Уплотнители',
  'Флюгеры',
  '...',
]

const facadeItems = [
  'Фасадные панели',
  'Элементы подконструкции',
  'Отделочные элементы',
  'Сайдинг',
  'Профнастил стеновой',
  'Фасадная плитка',
]

const fencingItems = [
  'Штакетник металлический',
  'Профнастил для забора',
  'Сетка рабица',
  '3D заборные панели',
  'Ворота и калитки',
  'Столбы для заборов',
]

const metalItems = [
  'Трубы стальные',
  'Уголки металлические',
  'Швеллеры',
  'Балки двутавровые',
  'Листовая сталь',
  'Арматура',
]

const insulationItems = [
  'Утеплители',
  'Пленка для пароизоляции',
  'Гидроизоляция',
  'Минеральная вата',
  'Пенополистирол',
  'Пенопласт',
]

const drainageItems = [
  'Желоба водосточные',
  'Трубы водосточные',
  'Кронштейны и крепления',
  'Воронки и отводы',
  'Заглушки и соединители',
  'Защитные решетки',
]
</script>
