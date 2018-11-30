import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  }
})
