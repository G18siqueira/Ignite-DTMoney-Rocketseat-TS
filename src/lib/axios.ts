import axios from 'axios'

// export const api = axios.create({ baseURL: 'http://localhost:3333' })

export const api = axios.create({
  baseURL: 'https://dtmoney-server-test.vercel.app/api',
})

/*
export const api = axios.create({
  // API SIMULADA (https://www.mockapi.io/)
  baseURL: 'https://6477ed56362560649a2d0c36.mockapi.io',
})
*/
