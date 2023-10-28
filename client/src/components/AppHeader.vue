<template>
  <header class="header">
    <div class="container container__header">
      <div class="header__wrapper">
        <RouterLink to="/" class="header__logo">
          <i class="pi pi-amazon"></i>
          <span>Pool</span>
        </RouterLink>
        <Button label="Add Poll" @click="$router.push('/add-pool')"></Button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@import '@/assets/vars.scss';

.header {
  width: 100%;
  background-color: lightblue;
  padding: 20px 0;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  &__logo {
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: $black;
    gap: 10px;
    span {
      font-size: 25px;
      color: $blue;
      text-transform: uppercase;
      margin-top: -5px;
    }
    i {
      font-size: 30px;
      color: $blue;
    }
  }
  &__nav {
    display: flex;
    gap: 16px;
    a {
      text-decoration: none;
      font-size: 18px;
      color: $black;
      border-bottom: 1px solid transparent;
      &.active {
        border-color: $black;
      }
    }
  }
}
</style>
