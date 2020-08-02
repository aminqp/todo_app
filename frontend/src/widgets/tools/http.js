import * as axios from 'axios';


class HttpClass {
   headers = {
     'Accept-Language': 'en',
     Authorization: '',
     accept: 'application/json',
     'content-type': 'application/json; charset=utf-8'
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
       (error) =>
       // Do something with request error
         Promise.reject(error));

     this.instance.interceptors.response.use((response) =>
     // Any status code that lie within the range of 2xx cause this function
     // to trigger Do something with response data
       response,
     (error) =>
     // Any status codes that falls outside the range of 2xx cause this
     // function to trigger Do something with response error
       Promise.reject(error));
   };
}

export default new HttpClass();
