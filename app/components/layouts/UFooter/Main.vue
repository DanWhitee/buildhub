<template>
  <footer class="bg-header-bg">
    <u-container class="py-8">
      <!-- Main content section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company info column -->
        <div class="flex flex-col gap-4">
          <nuxt-link
            to="/"
            class="flex items-center gap-2"
          >
            <img
              src="/icons/footer-logo.svg"
              alt="Logo"
              class="w-10 h-10"
            >
            <div class="flex flex-col">
              <span class="text-brand-yellow text-base font-normal uppercase tracking-[0.03046875em] leading-[1.5em]">
                ЛЕ-МАНА
              </span>
              <span class="text-text-muted text-[10px] font-normal leading-[15px] tracking-[0.01171875em]">
                ПРО
              </span>
            </div>
          </nuxt-link>
          <p class="text-text-muted text-sm font-normal leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
            Оптовая и розничная торговля строительными материалами
          </p>
        </div>

        <!-- Contacts column -->
        <div class="flex flex-col gap-4">
          <h3 class="text-white text-lg font-medium leading-[1.5em] tracking-[-0.0244140625em]">
            Контакты
          </h3>
          <ul class="flex flex-col gap-3">
            <li class="flex items-center gap-2">
              <img
                src="/icons/phone.svg"
                alt=""
                class="w-4 h-4 shrink-0"
              >
              <a
                href="tel:+78002001234"
                class="text-white text-sm font-medium leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:opacity-80 transition-opacity"
              >
                8 (800) 200-12-34
              </a>
            </li>
            <li class="flex items-center gap-2">
              <img
                src="/icons/email.svg"
                alt=""
                class="w-4 h-4 shrink-0"
              >
              <a
                href="mailto:info@lemana-pro.ru"
                class="text-white text-sm font-medium leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:opacity-80 transition-opacity"
              >
                info@lemana-pro.ru
              </a>
            </li>
            <li class="flex items-center gap-2">
              <img
                src="/icons/location.svg"
                alt=""
                class="w-4 h-4 shrink-0"
              >
              <span class="text-text-muted text-sm font-normal leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
                г. Воронеж, ул. Промышленная, 15
              </span>
            </li>
          </ul>
        </div>

        <!-- Working hours column -->
        <div class="flex flex-col gap-4">
          <h3 class="text-white text-lg font-medium leading-[1.5em] tracking-[-0.0244140625em]">
            Режим работы
          </h3>
          <div class="flex items-start gap-2">
            <img
              src="/icons/clock.svg"
              alt=""
              class="w-4 h-4 shrink-0 mt-0.5"
            >
            <div class="flex flex-col gap-1">
              <p class="text-text-muted text-sm font-normal leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
                Пн-Пт: 08:00 - 18:00
              </p>
              <p class="text-text-muted text-sm font-normal leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
                Сб: 09:00 - 15:00
              </p>
              <p class="text-text-muted text-sm font-normal leading-[1.4285714285714286em] tracking-[-0.0107421875em]">
                Вс: выходной
              </p>
            </div>
          </div>
        </div>

        <!-- Information column -->
        <div class="flex flex-col gap-4">
          <h3 class="text-white text-lg font-medium leading-[1.5em] tracking-[-0.0244140625em]">
            Информация
          </h3>
          <ul class="flex flex-col gap-2">
            <li>
              <nuxt-link
                to="/about"
                class="text-text-muted text-sm font-normal leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:text-white transition-colors"
              >
                О компании
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/delivery"
                class="text-text-muted text-sm font-normal leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:text-white transition-colors"
              >
                Доставка и оплата
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/catalog"
                class="text-text-muted text-sm font-normal leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:text-white transition-colors"
              >
                Каталог
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/contacts"
                class="text-text-muted text-sm font-normal leading-[1.4285714285714286em] tracking-[-0.0107421875em] hover:text-white transition-colors"
              >
                Контакты
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright section -->
      <div class="border-t border-[#364153] pt-8">
        <p class="text-text-muted text-sm font-normal leading-[1.4285714285714286em] tracking-[-0.0107421875em] text-center">
          © 2026 ЛЕ-МАНА ПРО. Все права защищены.
        </p>
      </div>
    </u-container>
  </footer>
</template>

<script setup lang="ts">
import { UContainer } from '@/components/templates'
</script>
