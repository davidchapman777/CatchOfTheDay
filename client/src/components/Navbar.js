
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineUser }from 'react-icons/ai'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import { useState } from 'react'
import logo from '../images/logo.jpeg'
const Navbar = () => {
  const [logout, setLogout]=useState(false)
  const { logoutUser, user, }=useAppContext()
  return (
    <Wrapper>
      <div className='buttons'>
        <div>
          
        </div>
        <div>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div className='user'>
          <button type='button' className='user-btn' onClick={()=> setLogout(!logout)}>
            <AiOutlineUser className='icon'/>{user?.name}
          </button>
          <button type='button' className='logout-btn' onClick={logoutUser}>
            <FiLogOut className='icon' />logout
          </button>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
height: 13%;
width: 100%;
position: fixed;
z-index: 2;
border-bottom: .2vw solid black;
background-color: white;
.icon{
  font-size: 2vh;
}

.logo{
  position: absolute;
  width: 20vh;
  top: -15vh;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  
}

.user{
  position: absolute;
  top: 3vh;
  left: 0vh;  
  height: 15vh;
  width: 20vh;
  .user-btn{
    position: absolute;
    font-size: 2vh;
    text-transform: capitalize;
    background-color: white;
    border: none;
    border-bottom: 0.1vw solid black;
    width: 10vh;
    margin: auto;
    right: 0;
    left:0;
  }
  .logout-btn{
    position: absolute;
    top: 3vh;
    font-size: 2vh;
    border: .1vw solid black;
    border-radius: 5px;
    background-color: white;
    width: 10vh;
    margin: auto;
    right: 0;
    left:0;
    padding: 1vh;
    box-shadow: 10px 10px 10px black;
    display: none;
  }
  
}
.buttons{
  display: grid;
  grid-template-columns: 40vw 40vw 10vw;
  align-items: center;
}
.user-btn:hover+.logout-btn{
  display: block;
}
.logout-btn:hover{
  display: block;
  background-color: black;
  color: white;
  border-color: white;
}


@media only screen and (min-width: 630px) {
  .user{
    .logout-btn{
      top: 3vh;
    }
  }

}
@media only screen and (min-width: 750px) {
  .logo{
    width: 25vh;
  }
}
@media only screen and (min-width: 850px) {
  .logo{
   width:45vh;  
}
}
@media only screen and (min-width: 1000px) {
  .user{
  left: 0vw;
  .logout-btn{
    top: 3vh;
  }
}}


`
export default Navbar
