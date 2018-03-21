import axios from 'axios'
export default () => {
  return axios.create({
    baseUrl: 'http://localhost:3000'
  })
}
