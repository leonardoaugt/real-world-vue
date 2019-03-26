import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  widthCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCertificates() {
    return apiClient.get('/certificates')
  }
}
