import axios from 'axios'; 

let instanceAxios = axios.create({
  baseURL: 'http://localhost:8000/'
});

instanceAxios.defaults.headers.common['X-token'] = '123';

export default instanceAxios