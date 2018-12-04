import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.iextrading.com/1.0'
})
