import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from '../images/logo.jpeg'


const Landing = () => {
  return (
    <Wrapper>
      <div className="container">
          <img src={logo} className='img'/>
          <p className="p">
              A place where fishermen can post about the catches of their day.
          </p>
          <Link to='/register' className="link1">Join/Login</Link>
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
.container{
  margin: auto;
  left: 0;
  right: 0;
  position: relative;
  top: 15vh;
  max-width:52vh;
  text-align: center;
}

.img{
  background-color: white;
  max-width: 99.9%;
  margin: auto;
  left: 0;
  right: 0;
  box-shadow: 10px 10px 10px;
}

.p{
  width: 90%;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 15vh;
  position: relative;
  text-align: center;
}
.link1{
  border: 0.1vw solid black;
  border-radius: 10px;
  position: relative;
  bottom: 10vh;
  padding: 1vh;
  text-decoration: none;
  color: black;
  animation: my-move 1.2s infinite;
  animation-direction: alternate;
  box-shadow: 10px 10px 10px black;
}
.link1:hover{
  background-color: black;
  color: white;
}
@keyframes my-move{
from{bottom:10vh};
to{bottom:12vh}
}

`

export default Landing