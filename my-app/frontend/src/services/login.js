import axios from 'axios'
import { apiServerUrl } from '../config'
const baseUrl = apiServerUrl + '/api/login'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const exportables = {
  login,
}

export default exportables

