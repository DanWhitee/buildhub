<template>
  <div class="min-h-screen bg-[#F9FAFB]">
    <!-- Hero Section -->
    <section class="py-20">
      <u-container>
        <div class="max-w-3xl">
          <u-badge
            variant="secondary"
            class="mb-4 inline-block bg-[#51A2FF] text-white border-0"
          >
            О компании
          </u-badge>
          <h1 class="text-2xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[0.0029296875em] mb-6">
            Надёжный партнёр в мире строительных материалов
          </h1>
          <p class="text-lg font-normal text-[#EFF6FF] leading-[1.5555555555555556em] tracking-[-0.0244140625em] text-[#364153]">
            Уже более 15 лет мы помогаем профессионалам и частным мастерам воплощать их строительные проекты в жизнь, предоставляя качественные материалы и первоклассный сервис.
          </p>
        </div>
      </u-container>
    </section>

    <!-- Statistics Section -->
    <section class="py-16">
      <u-container>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white border border-black/10 rounded-[14px] p-6 text-center">
            <div class="w-10 h-10 mx-auto mb-6 bg-[#DBEAFE] rounded-lg flex items-center justify-center">
              <!-- Icon placeholder -->
            </div>
            <div class="text-[30px] font-normal text-[#0A0A0A] leading-[1.2em] tracking-[0.01318359375em] mb-2">
              15+
            </div>
            <div class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
              Лет на рынке
            </div>
          </div>

          <div class="bg-white border border-black/10 rounded-[14px] p-6 text-center">
            <div class="w-10 h-10 mx-auto mb-6 bg-[#DBEAFE] rounded-lg flex items-center justify-center">
              <!-- Icon placeholder -->
            </div>
            <div class="text-[30px] font-normal text-[#0A0A0A] leading-[1.2em] tracking-[0.01318359375em] mb-2">
              50+
            </div>
            <div class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
              Сотрудников
            </div>
          </div>

          <div class="bg-white border border-black/10 rounded-[14px] p-6 text-center">
            <div class="w-10 h-10 mx-auto mb-6 bg-[#DBEAFE] rounded-lg flex items-center justify-center">
              <!-- Icon placeholder -->
            </div>
            <div class="text-[30px] font-normal text-[#0A0A0A] leading-[1.2em] tracking-[0.01318359375em] mb-2">
              10000+
            </div>
            <div class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
              Довольных клиентов
            </div>
          </div>

          <div class="bg-white border border-black/10 rounded-[14px] p-6 text-center">
            <div class="w-10 h-10 mx-auto mb-6 bg-[#DBEAFE] rounded-lg flex items-center justify-center">
              <!-- Icon placeholder -->
            </div>
            <div class="text-[30px] font-normal text-[#0A0A0A] leading-[1.2em] tracking-[0.01318359375em] mb-2">
              500+
            </div>
            <div class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
              Партнёров
            </div>
          </div>
        </div>
      </u-container>
    </section>

    <!-- Who We Are Section -->
    <section class="py-16">
      <u-container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="space-y-6">
            <h2 class="text-xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0224609375em]">
              Кто мы
            </h2>
            <div class="space-y-4">
              <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                Мы — ведущий поставщик строительных материалов, который специализируется на комплексном обеспечении строительных объектов всем необходимым. От кровельных материалов до металлопроката — у нас вы найдёте всё для вашего проекта.
              </p>
              <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                Наша компания была основана в 2009 году группой профессионалов строительной отрасли, которые понимали потребности рынка и стремились создать надёжного партнёра для строителей и застройщиков.
              </p>
              <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                За годы работы мы построили прочные отношения с ведущими производителями, что позволяет нам предлагать нашим клиентам оптимальное соотношение цены и качества, а также гарантировать наличие товара на складе.
              </p>
            </div>
          </div>
          <div class="bg-gray-200 rounded-2xl h-[546px] shadow-lg">
            <!-- Image placeholder -->
          </div>
        </div>
      </u-container>
    </section>

    <!-- Our Values Section -->
    <section class="py-16 bg-white">
      <u-container>
        <div class="text-center mb-12">
          <h2 class="text-xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0224609375em] mb-4">
            Наши ценности
          </h2>
          <p class="text-base font-normal text-[#4A5565] leading-[1.5em] tracking-[-0.01953125em]">
            Принципы, которыми мы руководствуемся в работе каждый день
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="value in values"
            :key="value.title"
            class="bg-white border border-black/10 rounded-[14px] p-6"
          >
            <div class="w-12 h-12 bg-[#DBEAFE] rounded-[10px] flex items-center justify-center mb-4">
              <!-- Icon placeholder -->
            </div>
            <h3 class="text-lg font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0244140625em] mb-2">
              {{ value.title }}
            </h3>
            <p class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
              {{ value.description }}
            </p>
          </div>
        </div>
      </u-container>
    </section>

    <!-- Our History Section -->
    <section class="py-16">
      <u-container>
        <div class="text-center mb-12">
          <h2 class="text-xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0224609375em] mb-4">
            Наша история
          </h2>
          <p class="text-base font-normal text-[#4A5565] leading-[1.5em] tracking-[-0.01953125em]">
            Путь от небольшого склада до крупного регионального поставщика
          </p>
        </div>
        <div class="max-w-4xl mx-auto space-y-8">
          <div
            v-for="event in history"
            :key="event.year"
            class="flex gap-6"
          >
            <div class="flex-shrink-0">
              <div class="w-20 h-20 bg-[#155DFC] rounded-full flex items-center justify-center">
                <span class="text-sm font-normal text-white leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
                  {{ event.year }}
                </span>
              </div>
            </div>
            <div class="flex-1 pt-6">
              <div class="bg-white border border-black/10 rounded-[14px] p-6">
                <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                  {{ event.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </u-container>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 bg-white">
      <u-container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="space-y-6">
            <h2 class="text-xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0224609375em]">
              Почему выбирают нас
            </h2>
            <ul class="space-y-3">
              <li
                v-for="item in whyChooseUs"
                :key="item"
                class="flex items-start gap-3"
              >
                <div class="w-5 h-5 flex-shrink-0 mt-0.5">
                  <!-- Check icon placeholder -->
                </div>
                <span class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-200 rounded-2xl h-[546px] shadow-lg">
            <!-- Image placeholder -->
          </div>
        </div>
      </u-container>
    </section>

    <!-- Our Team Section -->
    <section class="py-16">
      <u-container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-gray-200 rounded-2xl h-[546px] shadow-lg">
            <!-- Image placeholder -->
          </div>
          <div class="space-y-6">
            <h2 class="text-xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0224609375em]">
              Наша команда
            </h2>
            <div class="space-y-4">
              <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                Основа нашего успеха — это профессиональная команда специалистов, каждый из которых является экспертом в своей области.
              </p>
              <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                Наши менеджеры помогут подобрать оптимальное решение для вашего проекта, ответят на все вопросы и предложат наиболее выгодные условия сотрудничества.
              </p>
              <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                Мы постоянно развиваемся, обучаем наших сотрудников и следим за новинками строительного рынка, чтобы предоставлять вам только актуальную информацию и лучшие решения.
              </p>
            </div>
          </div>
        </div>
      </u-container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-[#155DFC] to-[#2B7FFF]">
      <u-container>
        <div class="text-center text-white max-w-3xl mx-auto space-y-6">
          <h2 class="text-xl font-medium leading-[1.5em] tracking-[-0.0224609375em]">
            Готовы начать сотрудничество?
          </h2>
          <p class="text-lg font-normal text-[#EFF6FF] leading-[1.5555555555555556em] tracking-[-0.0244140625em]">
            Свяжитесь с нами сегодня, и мы поможем подобрать оптимальное решение для вашего проекта
          </p>
          <div class="flex justify-center gap-4">
            <u-button
              class="bg-white text-[#155DFC] hover:bg-white/90 px-8 py-3 rounded-[10px]"
            >
              Позвонить нам
            </u-button>
            <u-button
              variant="outline"
              class="border-white text-white hover:bg-white/10 px-8 py-3 rounded-[10px]"
            >
              Написать письмо
            </u-button>
          </div>
        </div>
      </u-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { UBadge, UButton } from '@/components/base'
import { UContainer } from '@/components/templates'

const values = [
  {
    title: 'Качество',
    description: 'Работаем только с проверенными производителями и гарантируем качество всей продукции',
  },
  {
    title: 'Оперативность',
    description: 'Быстрая обработка заказов и доставка точно в срок по всему региону',
  },
  {
    title: 'Надёжность',
    description: 'Официальные договоры, прозрачные условия и гарантия на все товары',
  },
  {
    title: 'Клиентоориентированность',
    description: 'Индивидуальный подход к каждому клиенту и гибкая система скидок',
  },
  {
    title: 'Экспертность',
    description: 'Профессиональные консультации и помощь в подборе материалов',
  },
  {
    title: 'Логистика',
    description: 'Собственный автопарк и отлаженная система доставки',
  },
]

const history = [
  {
    year: '2009',
    description: 'Основание компании, открытие первого склада',
  },
  {
    year: '2012',
    description: 'Расширение ассортимента, партнёрство с ведущими производителями',
  },
  {
    year: '2015',
    description: 'Запуск интернет-магазина и системы онлайн-заказов',
  },
  {
    year: '2018',
    description: 'Открытие второго складского комплекса',
  },
  {
    year: '2021',
    description: 'Запуск собственной службы доставки',
  },
  {
    year: '2024',
    description: 'Более 10000 довольных клиентов и расширение географии',
  },
]

const whyChooseUs = [
  'Широкий ассортимент строительных материалов',
  'Прямые поставки от производителей',
  'Конкурентные цены без посредников',
  'Гибкая система скидок для оптовых покупателей',
  'Профессиональные консультации специалистов',
  'Быстрая доставка по всему региону',
  'Помощь в расчёте необходимого количества материалов',
  'Программа лояльности для постоянных клиентов',
]
</script>
