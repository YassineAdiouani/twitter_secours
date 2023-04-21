import axios from 'axios'
import  { useEffect, useState } from 'react'

const useAuth = (url) => {
  axios.post('http://127.0.0.1:8000/api/login', url)
  .then(res => {
      if(res.status === 200) {
          // setUser(res.data.data.user)
          console.log(res);
          // setAuth(true)
          // navigate('/')
      }
  }).catch(Err => {
      console.log(Err);
  })
}
export default useAuth