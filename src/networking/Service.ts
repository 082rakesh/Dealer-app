import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const getUserList = async () => {
  const response = axios.get(`${BASE_URL}/users`);
  return (await response).data;
};


