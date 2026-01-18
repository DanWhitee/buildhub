<template>
  <div class="min-h-screen bg-[#F9FAFB] py-6">
    <u-container>
      <!-- Header Section -->
      <div class="mb-6">
        <h1 class="text-2xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[0.0029296875em] mb-2">
          Каталог товаров
        </h1>
        <p class="text-base font-normal text-[#4A5565] leading-[1.5em] tracking-[-0.01953125em]">
          Найдите необходимые строительные материалы
        </p>
      </div>

      <div class="flex gap-6">
        <!-- Filters Sidebar -->
        <aside class="w-[358px] shrink-0">
          <div class="bg-white border border-black/10 rounded-[14px] p-6">
            <!-- Filters Header -->
            <div class="flex items-center gap-2 mb-6">
              <img
                src="/icons/menu.svg"
                alt=""
                class="w-5 h-5"
              >
              <h2 class="text-base font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.01953125em]">
                Фильтры
              </h2>
            </div>

            <!-- Categories Section -->
            <div class="mb-6">
              <h3 class="text-lg font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0244140625em] mb-3">
                Категории
              </h3>
              <div class="flex flex-col gap-2">
                <u-button
                  v-for="category in categories"
                  :key="category"
                  :class="cn(
                    'w-full justify-start h-10 px-3 rounded text-base font-medium leading-[1.5em] tracking-[-0.01953125em]',
                    selectedCategory === category
                      ? 'bg-[#155DFC] text-white hover:bg-[#155DFC]'
                      : 'bg-transparent text-[#0A0A0A] hover:bg-gray-50 border-0',
                  )"
                  variant="ghost"
                  @click="selectedCategory = category"
                >
                  {{ category }}
                </u-button>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px bg-black/10 mb-6"></div>

            <!-- In Stock Filter -->
            <div class="flex items-center gap-2">
              <input
                id="in-stock-only"
                v-model="inStockOnly"
                type="checkbox"
                class="w-4 h-4 rounded border border-black/10 bg-[#F3F3F5] text-[#155DFC] focus:ring-2 focus:ring-[#155DFC]/20 focus:ring-offset-0 cursor-pointer"
              >
              <label
                for="in-stock-only"
                class="text-sm font-medium text-[#0A0A0A] leading-[1.4285714285714286em] tracking-[-0.0107421875em] cursor-pointer"
              >
                Только в наличии
              </label>
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1">
          <!-- Search and Sort Bar -->
          <div class="flex items-center gap-4 mb-6">
            <!-- Sort Dropdown -->
            <u-dropdown-menu>
              <u-dropdown-menu-trigger as-child>
                <u-button
                  variant="outline"
                  class="h-9 px-3 bg-[#F3F3F5] border-0 text-sm font-medium text-[#0A0A0A] leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:bg-[#F3F3F5]"
                >
                  <span>По названию</span>
                  <img
                    src="/icons/chevron-down.svg"
                    alt=""
                    class="w-4 h-4 opacity-50"
                  >
                </u-button>
              </u-dropdown-menu-trigger>
              <u-dropdown-menu-content>
                <u-dropdown-menu-item>По названию</u-dropdown-menu-item>
                <u-dropdown-menu-item>По цене</u-dropdown-menu-item>
                <u-dropdown-menu-item>По популярности</u-dropdown-menu-item>
              </u-dropdown-menu-content>
            </u-dropdown-menu>

            <!-- Search Input -->
            <div class="relative flex-1">
              <u-input
                v-model="searchQuery"
                placeholder="Поиск товаров..."
                class="h-9 pl-10 pr-3 bg-[#F3F3F5] border-0 rounded-lg placeholder:text-[#717182] text-sm"
              />
              <img
                src="/icons/search.svg"
                alt=""
                class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              >
            </div>
          </div>

          <!-- Products Grid -->
          <div class="grid grid-cols-3 gap-6">
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="bg-white border border-black/10 rounded-[14px] overflow-hidden"
            >
              <!-- Product Image -->
              <div class="relative">
                <div class="aspect-356/200 bg-[#E5E7EB]">
                  <!-- Placeholder for product image -->
                </div>
                <div
                  :class="cn(
                    'absolute top-2 right-2 px-2 py-1 rounded text-xs font-normal leading-[1.3333333333333333em]',
                    product.inStock
                      ? 'bg-[#00A63E] text-white'
                      : 'bg-[#E7000B] text-white',
                  )"
                >
                  {{ product.inStock ? 'В наличии' : 'Нет в наличии' }}
                </div>
              </div>

              <!-- Product Info -->
              <div class="p-4">
                <!-- Category -->
                <div class="text-xs font-normal text-[#6A7282] leading-[1.3333333333333333em] mb-2">
                  {{ product.category }}
                </div>

                <!-- Product Name -->
                <h3 class="text-lg font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0244140625em] mb-4">
                  {{ product.name }}
                </h3>

                <!-- Price -->
                <div class="flex items-baseline gap-2 mb-4">
                  <span class="text-xl font-normal text-[#155DFC] leading-[1.4em] tracking-[-0.0224609375em]">
                    {{ product.price }} ₽
                  </span>
                  <span class="text-sm font-normal text-[#6A7282] leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
                    {{ product.unit }}
                  </span>
                </div>

                <!-- Add to Cart Button -->
                <u-button
                  :class="cn(
                    'w-full h-9 rounded-lg text-sm font-medium leading-[1.4285714285714286em] tracking-[-0.0107421875em] flex items-center justify-center gap-2',
                    product.inStock
                      ? 'bg-[#155DFC] text-white hover:bg-[#155DFC]/90'
                      : 'bg-[#155DFC] text-white opacity-50 cursor-not-allowed',
                  )"
                  :disabled="!product.inStock"
                >
                  <img
                    src="/icons/cart.svg"
                    alt=""
                    class="w-4 h-4"
                  >
                  {{ product.inStock ? 'В корзину' : 'Нет в наличии' }}
                </u-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </u-container>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { UButton, UDropdownMenu, UDropdownMenuContent, UDropdownMenuItem, UDropdownMenuTrigger, UInput } from '@/components/base'
import { UContainer } from '@/components/templates'
import { cn } from '@/lib/utils'

const categories = [
  'Все',
  'Кровля',
  'Фасад',
  'Ограждения',
  'Металлопрокат',
  'Утеплители',
  'Водостоки',
  'Комплектующие',
]

const selectedCategory = ref('Все')
const inStockOnly = ref(false)
const searchQuery = ref('')

const products = [
  {
    id: 1,
    name: 'Водосточная система Docke',
    category: 'Водостоки',
    price: 280,
    unit: '/ компл.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Гибкая черепица Shinglas',
    category: 'Кровля',
    price: 450,
    unit: '/ м²',
    inStock: true,
  },
  {
    id: 3,
    name: 'Гидроизоляция Технониколь',
    category: 'Утеплители',
    price: 190,
    unit: '/ рулон',
    inStock: true,
  },
  {
    id: 4,
    name: 'Крепежные элементы',
    category: 'Комплектующие',
    price: 45,
    unit: '/ кг',
    inStock: false,
  },
  {
    id: 5,
    name: 'Профнастил С-8',
    category: 'Фасад',
    price: 320,
    unit: '/ м²',
    inStock: true,
  },
  {
    id: 6,
    name: 'Труба профильная 40х40',
    category: 'Металлопрокат',
    price: 850,
    unit: '/ тонна',
    inStock: true,
  },
  {
    id: 7,
    name: 'Утеплитель Rockwool',
    category: 'Утеплители',
    price: 620,
    unit: '/ м³',
    inStock: true,
  },
  {
    id: 8,
    name: 'Штакетник металлический',
    category: 'Ограждения',
    price: 180,
    unit: '/ пог.м',
    inStock: true,
  },
]

const filteredProducts = computed(() => {
  let filtered = products

  // Filter by category
  if (selectedCategory.value !== 'Все') {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  }

  // Filter by stock
  if (inStockOnly.value) {
    filtered = filtered.filter(p => p.inStock)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      p =>
        p.name.toLowerCase().includes(query)
        || p.category.toLowerCase().includes(query),
    )
  }

  return filtered
})
</script>
