import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'x-api-key': 'cd150a09-8706-4b10-aa13-ba50d1219cfc' },
});

export default function requestHelper({ method, options }) {
  return instance({
    method,
    ...options,
  }).then(response => Promise.resolve(response));
}
