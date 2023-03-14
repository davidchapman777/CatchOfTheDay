import styled from "styled-components"
import {  FormRow, Alert } from "../components"
import { useState, useEffect } from "react"
import { useAppContext } from '../context/appContext'
import { useNavigate } from "react-router-dom"
import logo from '../images/logo.jpeg'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
const Register = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState)
  const { user, isLoading, showAlert, displayAlert,setupUser}=useAppContext()

  const toggleMember = () => {
    setState({...state, isMember:!state.isMember})
  }
  
  const handleChange = (e) => {
    setState({...state, [e.target.name]:e.target.value})
  }
  
  const onSubmit = async(e) => {
    e.preventDefault()
    let imageValue=''
    const { name, email, password, isMember, } = state
    
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }

    const currentUser = { name, email, password, image:imageValue }
    if (isMember) {
      setupUser({
        currentUser, 
        endPoint: 'login',
        alertText:'Login successful! Redirecting...'
      })
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText:'User created! Redirecting...'
      })
    }
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/all-posts')
      },3000)
    }
  },[user, navigate])
  return (
    <Wrapper>
      <div className="container">
      <img src={logo } className='img' alt="logo"/>
      <form className="form" onSubmit={onSubmit}>
        <h4 className="h4">{state.isMember? 'Login':'Register' }</h4>
        {showAlert && <Alert />}
        {!state.isMember &&
        <FormRow
        type='text'
        name='name'
        value={state.name}
        handleChange={handleChange}
        />
      }
          <FormRow
            type='email'
            name='email'
            value={state.email}
            handleChange={handleChange}
            />
        <FormRow
          type='password'
          name='password'
          value={state.password}
          handleChange={handleChange}
          />
        <button type="submit" disabled={isLoading} className='reg-btn'>submit</button>
        <p>
          {state.isMember ? 'Not a fisherman yet?' : 'Already a fisherman?'}
          <br/>
          <button type="button" onClick={toggleMember} className='reg-btn'>
            {state.isMember? 'Register':'Login'}
          </button>
        </p>
      </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: absolute;
margin: auto;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: #08a9c5;
.reg-btn{
  border: 0.1vw solid black;
  bottom: 10vh;
  text-decoration: none;
  color: black;
  background-color: white;
  border-radius: 10px;

}
.reg-btn:hover{
  color: white;
  background-color: black;
}

.container{
  margin: auto;
  left: 0;
  right: 0;
  position: relative;
  top: 10vh;
  height: 80vh;
  max-width:52vh;
  text-align: center;
  line-height: 3vh;
  background-color: white;
  box-shadow: 10px 10px 10px;
  
}
.h4{
  font-size: 3vh;
  border-bottom: 0.1vw solid black;
}
.img{
  max-width: 99.9%;
  margin: auto;
  position: relative;
  left: 0;
  right: 0;
  top: -10vh;
}
.form{
  position: relative;
  margin: auto;
  bottom: 25vh;
  width: 30vh;

}
`
export default Register