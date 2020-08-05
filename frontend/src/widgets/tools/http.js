import * as axios from 'axios';

class HttpClass {
   headers = {
     Accept: 'application/json',
     'Accept-Language': 'en',
     Authorization: '',
     'Content-Type': 'application/json; charset=utf-8',
     'x-trigger': 'CORS'
   };

  instance = null

   setAuthorization = (token) => {
     this.headers.Authorization = `Bearer ${token}`;
   }

   createInstance = () => {
     this.instance = axios.create({
       baseURL: process.env.REACT_APP_HTTP_BASE_URL || 'localhost',
       headers: this.headers,
       timeout: process.env.REACT_APP_HTTP_TIMEOUT || 30000,
       withCredentials: true
     });
     this.setInterceptors();
   }

   setInterceptors = () => {
     this.instance.interceptors.request.use((config) => config,
       (error) => Promise.reject(error));

     this.instance.interceptors.response.use((response) => response,
       (error) => Promise.reject(error));
   };
}

export default new HttpClass();
