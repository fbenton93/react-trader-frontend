import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  }
})

// the auth header is only non-null if we're fetching a logged-in user who
// is revisiting the site. In all other cases, we have to set default headers
