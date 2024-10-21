import Axios from 'axios'

console.log("NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL);
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000 * 60 * 5,
});

axios.interceptors.response.use((response) => {
  if (response.status === 200) return response.data
  return response
})

export default axios
