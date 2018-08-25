import axios from "axios"

axios.defaults.baseURL = process.env.REST_ENDPOINT

export default function baseService(method, link, data) {
  return axios({
    method: method,
    url: link,
    data: data
  })
}
