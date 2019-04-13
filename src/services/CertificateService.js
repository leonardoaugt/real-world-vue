import axios from 'axios'
import { Certificate } from 'crypto'

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
  },
  getCertificate(id) {
    return apiClient.get(`/certificates/${id}`)
  },
  postCertificate(certificate) {
    return apiClient.post('/certificates', certificate)
  }
}
