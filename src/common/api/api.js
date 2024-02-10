
export const API = {
  async testServer() {
    return await fetch('http://localhost:9090/api/ping')
      .then((response) => response.json())
      .catch(err => ({ status: 'error', message: err.message }))
  },
  async sendFeedbackFromData(data) {
    return await fetch('http://localhost:9090/api/registration', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .catch(err => err)
  }
}





