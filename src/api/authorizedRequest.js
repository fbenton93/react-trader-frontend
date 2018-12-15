import axios from 'axios';

// this is a problem on initial signup because 'jwt' is null at first

export default axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  }
})
