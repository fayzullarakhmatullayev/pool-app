<template>
  <RouterLink to="/" class="back">← Back to questions</RouterLink>
  <h1 class="title">Add Poool</h1>
  <form @submit.prevent="submitHandler" class="question__form">
    <InputText type="text" placeholder="Your question" v-model="formValues.question_text" />
    <Fieldset legend="Add choices" class="question__form--field">
      <div v-for="(choice, idx) in formValues.choices" :key="idx" class="question__form--choice">
        <InputText
          type="text"
          :placeholder="`choice ${idx + 1}`"
          :value="choice"
          @input="(event) => handleInputChoice(event, idx)"
        />
        <Button
          icon="pi pi-times"
          severity="danger"
          text
          raised
          rounded
          aria-label="Cancel"
          v-if="formValues.choices.length > 1"
          type="button"
          @click="handleRemoveChoice(idx)"
        />
      </div>

      <Button
        label="Add More"
        severity="secondary"
        text
        type="button"
        @click="handleAddMoreChoices"
        :disabled="isButtonDisabled"
      />
    </Fieldset>
    <Button type="submit" label="Submit" />
  </form>
</template>

<script setup>
import { computed, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const formValues = ref({
  question_text: '',
  choices: ['']
})

const handleRemoveChoice = (idx) => {
  formValues.value.choices = formValues.value.choices.filter((_, index) => idx !== index)
}

const handleInputChoice = (event, idx) => {
  formValues.value.choices[idx] = event.target.value
}

const handleAddMoreChoices = () => {
  if (
    formValues.value.choices.length > 0 &&
    formValues.value.choices[formValues.value.choices.length - 1] !== ''
  ) {
    formValues.value.choices.push('')
  } else {
    isButtonDisabled.value = true
  }
}

const isButtonDisabled = computed(() => {
  return formValues.value.choices.some((choice) => choice === '')
})

const submitHandler = async () => {
  await axios.post('/api/polls', formValues.value)
  router.push('/')
}
</script>

<style lang="scss" scoped>
.question__form {
  width: 100%;
  display: block;
  input {
    width: 100%;
  }
  &--choice {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  &--field {
    margin: 20px 0;
  }
}
</style>
