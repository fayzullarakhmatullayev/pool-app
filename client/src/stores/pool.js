import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePollStore = defineStore('poll', () => {
  const question = ref({})
  const questions = ref([])

  const getAllQuestions = async () => {
    try {
      const { data } = await axios.get('/api/polls')
      questions.value = data
    } catch (err) {
      console.log(err)
    }
  }

  const getQuestion = async (id) => {
    try {
      const { data } = await axios.get(`/api/polls/${id}`)

      question.value = data
    } catch (err) {
      console.log(err)
    }
  }

  return { questions, getAllQuestions, question, getQuestion }
})
