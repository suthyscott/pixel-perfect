import React from 'react'
import axios from 'axios'
import { useState, useContext } from 'react'
import AuthContext from '../store/authContext'

const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(false)
  const authCtx = useContext(AuthContext)

  const submitHandler = e => {
    e.preventDefault()

    axios.post(register ? '/api/register' : '/api/login', {username, password})
      .then(res => {
        console.log(res.data)
        const {token, exp, userId} = res.data
        authCtx.login(token, exp, userId)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Welcome! Please {register ? 'register' : 'log in'} below</h1>
        <input placeholder='username' onChange={e => setUsername(e.target.value)} />
        <input placeholder='password' type='password' onChange={e => setPassword(e.target.value)} />
        <button>Submit</button>
      </form>
        <button onClick={() => setRegister(!register)}>Need to {register ? 'Sign in?' : 'Register?'}</button>
    </div>
  )
}

export default Auth