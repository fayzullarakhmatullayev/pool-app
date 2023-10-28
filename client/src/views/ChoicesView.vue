<template>
  <div class="choices">
    <RouterLink to="/" class="back">← Back to questions</RouterLink>
    <form @submit.prevent="submitHandler">
      <Fieldset :legend="store.question.question_text">
        <div class="choices__wrapper">
          <div v-for="choice in store.question.choices" :key="choice.id" class="choices__options">
            <input
              type="radio"
              name="choice"
              :id="`choice${choice.id}`"
              :value="choice.id"
              @change="changeHandler"
            />
            <label :for="`choice${choice.id}`">{{ choice.choice_text }}</label>
          </div>
        </div>
      </Fieldset>
      <Button label="Vote" type="submit" icon="pi pi-check" class="choices__submit" />
    </form>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { usePollStore } from '@/stores/pool'
import { onMounted, onUnmounted, ref } from 'vue'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const store = usePollStore()
const choice_id = ref(null)
const changeHandler = (event) => {
  choice_id.value = event.target.value
}
const submitHandler = async () => {
  if (!choice_id.value) {
    alert('Select an option')
    return
  }
  await axios.put(`/api/polls/vote/${choice_id.value}`)
  router.push(`/${store.question.id}/result`)
}

onMounted(async () => await store.getQuestion(route.params.id))
onUnmounted(() => {
  store.question = {}
})
</script>

<style lang="scss" scoped>
.choices {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__options {
    display: flex;
    gap: 10px;
    input,
    label {
      cursor: pointer;
    }
  }
  &__submit {
    margin-top: 20px;
    gap: 10px;
  }
}
</style>
