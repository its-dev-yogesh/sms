import axios from 'axios';

export const BASE_URL = axios.create({
  // baseURL: "https://sms-service-flax.vercel.app/",
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
});
