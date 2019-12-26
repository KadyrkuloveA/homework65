import axios from 'axios';

const axiosPages = axios.create({
   baseURL: 'https://pages-js5.firebaseio.com/'
});

export default axiosPages;