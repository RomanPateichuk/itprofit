import axios from "axios"


const instance = axios.create({
  baseURL: `http://localhost:9090/api/`
})

export const feedbackFormApi = {
  sendFormData(data) {
    return instance.post(`registration`, { data })
  },
  testServer() {
    return instance.get(`ping`)
  }
}