import styled from 'styled-components'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import { useState }from 'react'
import axios from 'axios'

const Profile = () => {
  const {
    user,
    showAlert,
    displayAlert,
    updateUser,
    isLoading,
    authFetch
  } = useAppContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)
  const [image, setImage] = useState(user?.image)
  
  const handleSubmit = async(e) => {
    e.preventDefault()
   
    if (!name || !email || !lastName || !location) {
      displayAlert()
      return
    }
    updateUser({name, email, lastName, location})
  }
  return (
    <Wrapper>
      <h3 className='title'>Profile</h3>
        {showAlert && <Alert />}
      <div className='container'>
      <form onSubmit={handleSubmit} encType='multipart/form-data' className='form'>
      <FormRow
        type='file'
        name='image'
        handleChange={(e) => setImage(e.target.files[0])}  
        /> 
      <FormRow   
        type='text'
        name='name'
        value={name}
        handleChange={(e) => setName(e.target.value)}
        />
      <FormRow
        type='text'
        labelText='last name'
        name='lastName'
        value={lastName}
        handleChange={(e) => setLastName(e.target.value)}
        />
      <FormRow
        type='email'
        name='email'
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        />
      <FormRow
        type='text'
        name='location'
        value={location}
        handleChange={(e) => setLocation(e.target.value)}
          />        
          <div className='blank-space'></div>
        <button type='submit' disabled={isLoading} className='submit'>
          {isLoading?'please wait...':'save changes'}
        </button>
      </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  position: fixed;
  width: 100%;
  left: 0;
  right:0;
  top: 0;
  bottom: 0;
  background-color: #08a9c5;

.container{
width: 70%;
margin: 0 auto;
top: 15vh;
left: 0;
right: 0;
line-height: 4vh;
position: fixed;
font-size: 2vh;
}
.submit{
  background-color:#08a9c5 ;
  border: .1vw solid black;
  border-radius:10px;
  margin-top: 1vh;
  z-index: 1;
}
.submit:hover{
  background-color: black;
  color: white;
}
@media only screen and (min-width: 1000px) {

  .container{
    left: 15%;
  }
.form{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 10vh;
}
.submit{
  position: absolute;
  height: 4vh;
  width: 20vh;
  bottom: 0vh;
}
.blank-space{
  height: 25vh;
  width: 20vw;
}
}

`

export default Profile
