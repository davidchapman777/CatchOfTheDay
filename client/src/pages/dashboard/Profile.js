import styled from 'styled-components'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import { useState }from 'react'

const Profile = () => {
  const {
    user,
    showAlert,
    displayAlert,
    updateUser,
    isLoading,
    
  } = useAppContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)
  
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
      <div className='container'>
      <h3 className='title'>Profile</h3>
        {showAlert && <Alert />}
      <form onSubmit={handleSubmit} encType='multipart/form-data' className='form'>
      <FormRow
        type='file'
        name='image'
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
top: 20vh;
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
  color: black;
}
.submit:hover{
  background-color: black;
  color: white;
}
@media screen and (max-width: 850px) and (orientation: landscape){
.form{
  columns: 2;
  line-height: 7vh;
  top: 5vh;
  position: relative;
}
.title{
  font-size: 6vh;
  position: absolute;
  top: -9vh;
}
.submit{
  font-size: 5vh;
  color: black;
}
}
@media only screen and (min-width: 1000px) {
  .container{
    left: 15%;
  }
.form{
  justify-content: space-between;
  line-height: 5vh;
}
.submit{
  position: absolute;
  height: 4vh;
  width: 20vh;
  bottom: 20vh;
}
.blank-space{
  height: 25vh;
  width: 20vw;
}
}

`

export default Profile
