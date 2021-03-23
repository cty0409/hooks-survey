import axios from 'axios'
export function login(data: Object) {
  return axios({
    method: 'post',
    url: '/api/login',
    data: data
  })
}
