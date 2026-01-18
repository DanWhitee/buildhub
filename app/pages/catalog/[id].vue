<template>
  <div class="min-h-screen bg-[#F9FAFB] py-6">
    <u-container>
      <!-- Breadcrumbs Navigation -->
      <nav class="flex items-center gap-2 mb-6">
        <nuxt-link
          to="/"
          class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:text-[#0A0A0A] transition-colors"
        >
          Главная
        </nuxt-link>
        <img
          src="/icons/chevron-down.svg"
          alt=""
          class="w-4 h-4 -rotate-90 opacity-50"
        >
        <nuxt-link
          to="/catalog"
          class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:text-[#0A0A0A] transition-colors"
        >
          Каталог
        </nuxt-link>
        <img
          src="/icons/chevron-down.svg"
          alt=""
          class="w-4 h-4 -rotate-90 opacity-50"
        >
        <nuxt-link
          to="/catalog"
          class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:text-[#0A0A0A] transition-colors"
        >
          Сантехника
        </nuxt-link>
        <img
          src="/icons/chevron-down.svg"
          alt=""
          class="w-4 h-4 -rotate-90 opacity-50"
        >
        <span class="text-sm font-normal text-[#101828] leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
          {{ product.name }}
        </span>
      </nav>

      <!-- Product Section -->
      <div class="flex gap-6 mb-6">
        <!-- Image Gallery -->
        <div class="w-[736px] shrink-0">
          <!-- Main Image -->
          <div class="bg-white border border-black/10 rounded-[14px] p-3 mb-4">
            <div class="relative bg-[#F3F4F6] rounded-lg aspect-square overflow-hidden">
              <div class="w-full h-full bg-gray-200">
                <!-- Placeholder for main product image -->
              </div>
              <!-- Discount Badge -->
              <u-badge
                variant="red"
                class="absolute top-4 left-4 px-2 py-0.5 text-xs font-medium leading-[1.3333333333333333em]"
              >
                -11%
              </u-badge>
            </div>
          </div>

          <!-- Thumbnail Images -->
          <div class="flex gap-2">
            <button
              v-for="(thumbnail, index) in thumbnails"
              :key="index"
              :class="cn(
                'w-[178px] h-[178px] rounded-[10px] border overflow-hidden bg-white transition-all',
                selectedThumbnail === index
                  ? 'border-[#155DFC] shadow-[0_0_0_2px_rgba(190,219,255,1)]'
                  : 'border-[#E5E7EB] hover:border-[#155DFC]',
              )"
              @click="selectedThumbnail = index"
            >
              <div class="w-full h-full bg-gray-200">
                <!-- Placeholder for thumbnail image -->
              </div>
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div class="flex-1">
          <!-- Product Header -->
          <div class="mb-6">
            <p class="text-sm font-normal text-[#6A7282] leading-[1.4285714285714286em] tracking-[-0.0107421875em] mb-2">
              Артикул: {{ product.sku }}
            </p>
            <h1 class="text-2xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[0.0029296875em] mb-4">
              {{ product.name }}
            </h1>

            <!-- Badges -->
            <div class="flex items-center gap-2 mb-4">
              <u-badge
                variant="outline"
                class="px-2 py-0.5 text-xs font-medium leading-[1.3333333333333333em] border-black/10"
              >
                {{ product.brand }}
              </u-badge>
              <u-badge
                variant="outline"
                class="px-2 py-0.5 text-xs font-medium leading-[1.3333333333333333em] border-black/10"
              >
                {{ product.category }}
              </u-badge>
            </div>

            <!-- Stock Status -->
            <div class="flex items-center gap-2">
              <img
                src="/icons/clock.svg"
                alt=""
                class="w-5 h-5"
              >
              <span class="text-base font-normal text-[#00A63E] leading-[1.5em] tracking-[-0.01953125em]">
                В наличии ({{ product.stock }} шт.)
              </span>
            </div>
          </div>

          <!-- Divider -->
          <div class="h-px bg-black/10 mb-6"></div>

          <!-- Price Section -->
          <div class="mb-6">
            <div class="flex items-baseline gap-3 mb-2">
              <span class="text-[30px] font-normal text-[#155DFC] leading-[1.2em] tracking-[0.01318359375em]">
                {{ formatPrice(product.price) }} ₽
              </span>
              <span class="text-xl font-normal text-[#99A1AF] leading-[1.4em] tracking-[-0.0224609375em] line-through">
                {{ formatPrice(product.oldPrice) }} ₽
              </span>
            </div>
            <p class="text-sm font-normal text-[#6A7282] leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
              {{ product.unit }}
            </p>
          </div>

          <!-- Quantity Selector and Total -->
          <div class="mb-6">
            <div class="flex items-center gap-4 mb-2">
              <div class="flex items-center border border-[#D1D5DC] rounded-[10px]">
                <button
                  class="w-9 h-9 flex items-center justify-center text-[#0A0A0A] opacity-50 hover:opacity-100 transition-opacity"
                  @click="decrementQuantity"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 6h8"
                      stroke="currentColor"
                      stroke-width="1.33"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <span class="w-16 h-9 flex items-center justify-center text-base font-normal text-[#0A0A0A] leading-[1.5em] tracking-[-0.01953125em]">
                  {{ quantity }}
                </span>
                <button
                  class="w-9 h-9 flex items-center justify-center text-[#0A0A0A] hover:opacity-80 transition-opacity"
                  @click="incrementQuantity"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M6 2v8M2 6h8"
                      stroke="currentColor"
                      stroke-width="1.33"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p class="text-sm font-normal text-[#6A7282] leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
                На сумму: {{ formatPrice(totalPrice) }} ₽
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-3 mb-6">
            <u-button
              class="flex-1 h-10 bg-[#155DFC] text-white hover:bg-[#155DFC]/90 rounded-lg text-sm font-medium leading-[1.4285714285714286em] tracking-[-0.0107421875em]"
            >
              <img
                src="/icons/cart.svg"
                alt=""
                class="w-4 h-4"
              >
              В корзину
            </u-button>
            <button
              class="w-[49px] h-10 flex items-center justify-center bg-white border border-black/10 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1.33 2H2m0 0h12M2 2v12m12-12v12m0 0h-12"
                  stroke="currentColor"
                  stroke-width="1.33"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 1.33h4m0 0h-4m4 0v4m0-4v-4"
                  stroke="currentColor"
                  stroke-width="1.33"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              class="w-[49px] h-10 flex items-center justify-center bg-white border border-black/10 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="1.33"
                  fill="currentColor"
                />
                <circle
                  cx="2"
                  cy="2"
                  r="1.33"
                  fill="currentColor"
                />
                <circle
                  cx="14"
                  cy="2"
                  r="1.33"
                  fill="currentColor"
                />
                <circle
                  cx="14"
                  cy="14"
                  r="1.33"
                  fill="currentColor"
                />
                <circle
                  cx="2"
                  cy="14"
                  r="1.33"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <!-- Features Card -->
          <div class="bg-[#EFF6FF] border border-[#BEDBFF] rounded-[14px] p-4">
            <div class="flex items-start gap-3 mb-3">
              <img
                src="/icons/clock.svg"
                alt=""
                class="w-5 h-5 mt-0.5"
              >
              <div>
                <p class="text-sm font-normal text-[#0A0A0A] leading-[1.4285714285714286em] tracking-[-0.0107421875em] mb-0.5">
                  Быстрая доставка
                </p>
                <p class="text-xs font-normal text-[#4A5565] leading-[1.3333333333333333em]">
                  По всему региону
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3 mb-3">
              <img
                src="/icons/clock.svg"
                alt=""
                class="w-5 h-5 mt-0.5"
              >
              <div>
                <p class="text-sm font-normal text-[#0A0A0A] leading-[1.4285714285714286em] tracking-[-0.0107421875em] mb-0.5">
                  Гарантия качества
                </p>
                <p class="text-xs font-normal text-[#4A5565] leading-[1.3333333333333333em]">
                  От производителя
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <img
                src="/icons/clock.svg"
                alt=""
                class="w-5 h-5 mt-0.5"
              >
              <div>
                <p class="text-sm font-normal text-[#0A0A0A] leading-[1.4285714285714286em] tracking-[-0.0107421875em] mb-0.5">
                  Оригинальная продукция
                </p>
                <p class="text-xs font-normal text-[#4A5565] leading-[1.3333333333333333em]">
                  100% подлинность
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs Section -->
      <div class="bg-white border border-black/10 rounded-[14px] p-6">
        <!-- Tab List -->
        <div class="flex gap-1 mb-8 bg-[#ECECF0] rounded-[14px] p-1.5">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="cn(
              'flex-1 h-7 rounded-[14px] text-sm font-medium leading-[1.4285714285714286em] tracking-[-0.0107421875em] transition-all',
              activeTab === tab.id
                ? 'bg-white text-[#0A0A0A] shadow-sm'
                : 'text-[#0A0A0A] hover:text-[#4A5565]',
            )"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="space-y-4">
          <div v-if="activeTab === 'description'">
            <h3 class="text-lg font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0244140625em] mb-4">
              Описание товара
            </h3>
            <p class="text-base font-normal text-[#364153] leading-[1.625em] tracking-[-0.01953125em]">
              Комплект для установки подвесного унитаза включает высококачественную инсталляционную систему Grohe Rapid SL и современный безободковый унитаз Hansgrohe GladeLake. Идеальное решение для современной ванной комнаты, сочетающее надежность, функциональность и эстетику.
            </p>
          </div>

          <div v-if="activeTab === 'specifications'">
            <h3 class="text-lg font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0244140625em] mb-4">
              Характеристики
            </h3>
            <p class="text-base font-normal text-[#364153] leading-[1.625em] tracking-[-0.01953125em]">
              Характеристики товара будут отображаться здесь.
            </p>
          </div>

          <div v-if="activeTab === 'advantages'">
            <h3 class="text-lg font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0244140625em] mb-4">
              Преимущества
            </h3>
            <p class="text-base font-normal text-[#364153] leading-[1.625em] tracking-[-0.01953125em]">
              Преимущества товара будут отображаться здесь.
            </p>
          </div>
        </div>
      </div>
    </u-container>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { UBadge, UButton } from '@/components/base'
import { UContainer } from '@/components/templates'
import { cn } from '@/lib/utils'

// @ts-expect-error - useRoute is auto-imported in Nuxt 3
const route = useRoute()

// Mock product data - в реальном приложении будет загрузка из API
const product = ref({
  id: route.params.id as string,
  sku: '92217209',
  name: 'Инсталляция Grohe Rapid SL с клавишей хром и унитаз подвесной безободковый Hansgrohe GladeLake',
  brand: 'Grohe',
  category: 'Сантехника',
  stock: 15,
  price: 28500,
  oldPrice: 32000,
  unit: 'за комплект',
})

const selectedThumbnail = ref(0)
const thumbnails = [1, 2, 3] // Placeholder for thumbnail images
const quantity = ref(1)
const activeTab = ref('description')

const tabs = [
  { id: 'description', label: 'Описание' },
  { id: 'specifications', label: 'Характеристики' },
  { id: 'advantages', label: 'Преимущества' },
]

const totalPrice = computed(() => product.value.price * quantity.value)

function formatPrice(price: number) {
  return price.toLocaleString('ru-RU').replace(/\s/g, ' ')
}

function incrementQuantity() {
  if (quantity.value < product.value.stock) {
    quantity.value++
  }
}

function decrementQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}
</script>
