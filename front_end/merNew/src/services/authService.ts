// src/services/authService.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your API URL

export const login = async (email: string, password: string) => {
  try{
  const response = await axios.post(`${API_URL}/api/Login`, JSON.stringify({ email: email, password: password }), 
  {
    headers: {
      "content-type": "application/json",
    },
  },);
  console.log(JSON.stringify(response.data))
  console.log(JSON.stringify(response.headers))

  if (response.data.token  ) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}catch(err){
  console.log("there was an error")
}
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};

export const getToken = () => {
  const user = getCurrentUser();
  return user?.token;
};

export const isAuthenticated = () => {
  return !!getToken();
};
