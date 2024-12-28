import axios from 'axios';

export default axios.create({  // spring boot url
    baseURL: 'http://localhost:1222/api'
});