<template>
  <h1 class="title">Questions</h1>

  <div v-if="store.questions.length > 0" class="pannel__wrapper">
    <div class="panel" v-for="question in store.questions" :key="question.id">
      <i class="pi pi-question-circle"></i
      ><RouterLink :to="`/${question.id}`">{{ question.question_text }}</RouterLink>
    </div>
  </div>
  <div class="empty" v-else>Add a Pool</div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePollStore } from '@/stores/pool'

const store = usePollStore()

store.getAllQuestions()
</script>

<style lang="scss" scoped>
@import '@/assets/vars.scss';
.panel {
  padding: 25px 20px;
  border: 1px solid rgba($color: $blue, $alpha: 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  i {
    font-size: 18px;
    color: $red;
  }
  a {
    color: $black;
    font-size: 20px;
    text-decoration: none;
    color: $green;
  }
}
.pannel__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
