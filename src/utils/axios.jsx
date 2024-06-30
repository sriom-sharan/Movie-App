import axios from 'axios';

 const instance  = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzNmNzY2NGM4NzVhODNkZWJiMTViODI5YWZiZGIwNSIsInN1YiI6IjY1YmJiMDc2MTFjMDY2MDE3YmQwOWIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pcqWI65DWbSQCP_Vcg8_LocZIhlqIPYW7XrFFzSGP5U'
  },
});

export default instance;