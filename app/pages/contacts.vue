<template>
  <div class="min-h-screen bg-[#F9FAFB]">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-r from-[#155DFC] to-[#2B7FFF]">
      <u-container>
        <div class="max-w-3xl">
          <u-badge
            variant="secondary"
            class="mb-4 inline-block bg-[#51A2FF] text-white border-0"
          >
            Контакты
          </u-badge>
          <h1 class="text-2xl font-medium text-white leading-[1.5em] tracking-[0.0029296875em] mb-6">
            Свяжитесь с нами
          </h1>
          <p class="text-lg font-normal text-[#EFF6FF] leading-[1.5555555555555556em] tracking-[-0.0244140625em]">
            Мы всегда рады ответить на ваши вопросы и помочь с выбором строительных материалов. Выберите удобный способ связи или заполните форму обратной связи.
          </p>
        </div>
      </u-container>
    </section>

    <!-- Contact Cards Section -->
    <section class="py-16">
      <u-container>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Phone Card -->
          <div class="bg-white border border-black/10 rounded-[14px] p-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-[#DBEAFE] rounded-[10px] flex items-center justify-center shrink-0">
                <!-- Phone icon placeholder -->
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-lg font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0244140625em]">
                    Телефон
                  </h3>
                  <u-badge
                    variant="secondary"
                    class="bg-[#ECEEF2] text-[#030213] border-0 text-xs"
                  >
                    Бесплатно
                  </u-badge>
                </div>
                <p class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em] mb-4">
                  Звоните нам в рабочее время
                </p>
                <a
                  href="tel:+78002001234"
                  class="text-base font-normal text-[#155DFC] leading-[1.5em] tracking-[-0.01953125em] hover:opacity-80 transition-opacity"
                >
                  8 (800) 200-12-34
                </a>
              </div>
            </div>
          </div>

          <!-- WhatsApp Card -->
          <div class="bg-white border border-black/10 rounded-[14px] p-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-[#DBEAFE] rounded-[10px] flex items-center justify-center shrink-0">
                <!-- WhatsApp icon placeholder -->
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-lg font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0244140625em]">
                    WhatsApp
                  </h3>
                  <u-badge
                    variant="secondary"
                    class="bg-[#ECEEF2] text-[#030213] border-0 text-xs"
                  >
                    24/7
                  </u-badge>
                </div>
                <p class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em] mb-4">
                  Пишите в удобное время
                </p>
                <a
                  href="https://wa.me/74732001234"
                  class="text-base font-normal text-[#155DFC] leading-[1.5em] tracking-[-0.01953125em] hover:opacity-80 transition-opacity"
                >
                  +7 (473) 200-12-34
                </a>
              </div>
            </div>
          </div>

          <!-- Email Card -->
          <div class="bg-white border border-black/10 rounded-[14px] p-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-[#DBEAFE] rounded-[10px] flex items-center justify-center shrink-0">
                <!-- Email icon placeholder -->
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0244140625em] mb-2">
                  Email
                </h3>
                <p class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em] mb-4">
                  Отправьте нам письмо
                </p>
                <a
                  href="mailto:info@lemana-pro.ru"
                  class="text-base font-normal text-[#155DFC] leading-[1.5em] tracking-[-0.01953125em] hover:opacity-80 transition-opacity"
                >
                  info@lemana-pro.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </u-container>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16">
      <u-container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Form -->
          <div>
            <h2 class="text-xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0224609375em] mb-6">
              Форма обратной связи
            </h2>
            <div class="bg-white border border-black/10 rounded-[14px] p-6">
              <form class="space-y-4">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.0107421875em] mb-1"
                  >
                    Ваше имя *
                  </label>
                  <u-input
                    id="name"
                    placeholder="Иван Иванов"
                    class="w-full h-9 bg-[#F3F3F5] border border-black/0 rounded-lg text-[#717182]"
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.0107421875em] mb-1"
                  >
                    Телефон *
                  </label>
                  <u-input
                    id="phone"
                    placeholder="+7 (999) 123-45-67"
                    class="w-full h-9 bg-[#F3F3F5] border border-black/0 rounded-lg text-[#717182]"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.0107421875em] mb-1"
                  >
                    Email
                  </label>
                  <u-input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    class="w-full h-9 bg-[#F3F3F5] border border-black/0 rounded-lg text-[#717182]"
                  />
                </div>
                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-[#0A0A0A] leading-[1em] tracking-[-0.0107421875em] mb-1"
                  >
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    placeholder="Опишите ваш вопрос или запрос..."
                    rows="4"
                    class="w-full p-3 bg-[#F3F3F5] border border-black/0 rounded-lg text-sm font-normal text-[#717182] leading-[1.4285714285714286em] tracking-[-0.0107421875em] resize-none"
                  ></textarea>
                </div>
                <u-button
                  type="submit"
                  class="w-full bg-[#155DFC] text-white hover:bg-[#155DFC]/90 h-9 rounded-lg"
                >
                  Отправить сообщение
                </u-button>
                <p class="text-xs font-normal text-[#6A7282] leading-[1.3333333333333333em] text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </div>
          </div>

          <!-- Info Card -->
          <div class="space-y-6">
            <div class="bg-gray-200 rounded-2xl h-[409px] shadow-lg">
              <!-- Image placeholder -->
            </div>
            <div class="bg-[#EFF6FF] border border-[#BEDBFF] rounded-[14px] p-6">
              <h3 class="text-lg font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0244140625em] mb-4">
                Быстрый ответ
              </h3>
              <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em] mb-4">
                Мы стараемся отвечать на все обращения в течение рабочего дня. Для срочных вопросов рекомендуем позвонить по телефону.
              </p>
              <div class="flex items-center gap-2">
                <div class="w-4 h-4">
                  <!-- Clock icon placeholder -->
                </div>
                <span class="text-sm font-normal text-[#4A5565] leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
                  Среднее время ответа: 2 часа
                </span>
              </div>
            </div>
          </div>
        </div>
      </u-container>
    </section>

    <!-- Offices Section -->
    <section class="py-16 bg-white">
      <u-container>
        <div class="text-center mb-12">
          <h2 class="text-xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0224609375em] mb-4">
            Наши офисы и склады
          </h2>
          <p class="text-base font-normal text-[#4A5565] leading-[1.5em] tracking-[-0.01953125em]">
            Выберите ближайший к вам офис для самовывоза или консультации
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Main Office Card -->
          <div class="bg-white border border-black/10 rounded-[14px] overflow-hidden">
            <div class="bg-gradient-to-r from-[#155DFC] to-[#2B7FFF] p-6">
              <div class="flex items-center gap-2">
                <div class="w-5 h-5">
                  <!-- Office icon placeholder -->
                </div>
                <h3 class="text-base font-medium text-white leading-[1em] tracking-[-0.01953125em]">
                  Главный офис и склад
                </h3>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 shrink-0 mt-0.5">
                  <!-- Location icon placeholder -->
                </div>
                <div class="flex-1">
                  <p class="text-base font-normal text-[#101828] leading-[1.5em] tracking-[-0.01953125em] mb-2">
                    г. Воронеж, ул. Промышленная, д. 15
                  </p>
                  <a
                    href="#"
                    class="text-sm font-normal text-[#155DFC] leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                  >
                    <!-- Map icon -->
                    Показать на карте
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 shrink-0">
                  <!-- Phone icon placeholder -->
                </div>
                <a
                  href="tel:+74732001234"
                  class="text-base font-normal text-[#101828] leading-[1.5em] tracking-[-0.01953125em] hover:opacity-80 transition-opacity"
                >
                  +7 (473) 200-12-34
                </a>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 shrink-0">
                  <!-- Email icon placeholder -->
                </div>
                <a
                  href="mailto:info@lemana-pro.ru"
                  class="text-base font-normal text-[#101828] leading-[1.5em] tracking-[-0.01953125em] hover:opacity-80 transition-opacity"
                >
                  info@lemana-pro.ru
                </a>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 shrink-0 mt-0.5">
                  <!-- Clock icon placeholder -->
                </div>
                <div class="space-y-1">
                  <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                    Пн-Пт: 08:00 - 18:00
                  </p>
                  <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                    Сб: 09:00 - 15:00
                  </p>
                  <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                    Вс: выходной
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Warehouse Card -->
          <div class="bg-white border border-black/10 rounded-[14px] overflow-hidden">
            <div class="bg-gradient-to-r from-[#155DFC] to-[#2B7FFF] p-6">
              <div class="flex items-center gap-2">
                <div class="w-5 h-5">
                  <!-- Office icon placeholder -->
                </div>
                <h3 class="text-base font-medium text-white leading-[1em] tracking-[-0.01953125em]">
                  Дополнительный склад
                </h3>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 shrink-0 mt-0.5">
                  <!-- Location icon placeholder -->
                </div>
                <div class="flex-1">
                  <p class="text-base font-normal text-[#101828] leading-[1.5em] tracking-[-0.01953125em] mb-2">
                    г. Воронеж, ул. Складская, д. 42
                  </p>
                  <a
                    href="#"
                    class="text-sm font-normal text-[#155DFC] leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                  >
                    <!-- Map icon -->
                    Показать на карте
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 shrink-0">
                  <!-- Phone icon placeholder -->
                </div>
                <a
                  href="tel:+74732001235"
                  class="text-base font-normal text-[#101828] leading-[1.5em] tracking-[-0.01953125em] hover:opacity-80 transition-opacity"
                >
                  +7 (473) 200-12-35
                </a>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 shrink-0">
                  <!-- Email icon placeholder -->
                </div>
                <a
                  href="mailto:sklad@lemana-pro.ru"
                  class="text-base font-normal text-[#101828] leading-[1.5em] tracking-[-0.01953125em] hover:opacity-80 transition-opacity"
                >
                  sklad@lemana-pro.ru
                </a>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 shrink-0 mt-0.5">
                  <!-- Clock icon placeholder -->
                </div>
                <div class="space-y-1">
                  <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                    Пн-Пт: 08:00 - 18:00
                  </p>
                  <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                    Сб: 09:00 - 15:00
                  </p>
                  <p class="text-base font-normal text-[#364153] leading-[1.5em] tracking-[-0.01953125em]">
                    Вс: выходной
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </u-container>
    </section>

    <!-- Map Section -->
    <section class="py-16">
      <u-container>
        <div class="text-center mb-8">
          <h2 class="text-xl font-medium text-[#0A0A0A] leading-[1.5em] tracking-[-0.0224609375em] mb-4">
            Как нас найти
          </h2>
        </div>
        <div class="bg-white border border-black/10 rounded-[14px] overflow-hidden">
          <div class="bg-gradient-to-br from-[#DBEAFE] to-[#EFF6FF] p-8 flex flex-col items-center justify-center min-h-[600px]">
            <div class="w-12 h-12 mb-4">
              <!-- Map icon placeholder -->
            </div>
            <p class="text-base font-normal text-[#4A5565] leading-[1.5em] tracking-[-0.01953125em] mb-4">
              Интерактивная карта
            </p>
            <u-button
              variant="outline"
              class="bg-white border border-black/10 text-[#0A0A0A] hover:bg-gray-50"
            >
              Открыть в Яндекс.Картах
            </u-button>
          </div>
        </div>
      </u-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { UBadge, UButton, UInput } from '@/components/base'
import { UContainer } from '@/components/templates'
</script>
