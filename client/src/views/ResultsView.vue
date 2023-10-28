<template>
  <RouterLink to="/" class="back">← Back to questions</RouterLink>
  <Fieldset :legend="store.question.question_text">
    <div v-for="choice in store.question.choices" :key="choice.id">
      - {{ choice.choice_text }} -- votes: <strong>{{ choice.votes }}</strong>
    </div>
    <RouterLink :to="`/${store.question.id}`" class="back">Vote again?</RouterLink>
  </Fieldset>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { usePollStore } from '@/stores/pool'
import { onMounted, onUnmounted } from 'vue'
const route = useRoute()
const store = usePollStore()

onMounted(async () => await store.getQuestion(route.params.id))
onUnmounted(() => {
  store.question = {}
})
</script>
