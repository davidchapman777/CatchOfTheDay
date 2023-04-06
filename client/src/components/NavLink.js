import { NavLink } from "react-router-dom"
import links from "../utils/links"
import styled from "styled-components"

const NavLinks = ({toggleSidebar}) => {
  return (
      <Wrapper>
          {links.map((link) => {
            const { text, path, id, icon } = link;
            return <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) => isActive ? 'active' : 'inactive'}
            >
              <span className="icon1">{icon}</span>
              <br/>
              <span className="icon2">{icon}</span>
              {text}
              <br/>
            </NavLink>
          })}  
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: fixed;
display: flex;
width: 90%;
bottom: 0%;
border-top: .1vw solid black;
background-color: white;
font-size: 1.5vh;
text-align: center;
padding: 5%;

.icon2{
  display: none;
}

.inactive{
  text-decoration: none;
  color: black;
  margin: auto;
}
.inactive:hover{
  border-bottom: .5vw solid black;
}
.active{
  margin: auto;
  text-decoration: none;
  color: black;
  border-bottom: .5vw solid black;
}

@media screen and (max-width: 850px) and (orientation: landscape){
bottom: -20%;
font-size: large;
.inactive{
  position: relative;
  top: -10vh;
}
.active{
  position: relative;
  top: -10vh;
}
}
@media only screen and (min-width: 1000px) {
position: fixed;
display: block;
max-width: 110px;
height: 60%;
top: 13.3%;
border: none;
border-right: .2vw solid black;
background-color: white;
font-size: 2vh;
text-align: left;
padding: 2%;
line-height: 7vh;
background-image: linear-gradient(white, #08a9c5);

.icon1{
  display: none;
}
.icon2{
display: inline-block;
margin-right: .1vh;

}

.inactive{
  text-decoration: none;
  color: black;
  margin:auto ;
  padding-top: 3%;
}
.inactive:hover{
  border-bottom: .1vw solid black;
  transform: scale(1.3);
}
.active{
  margin: auto;
  padding-top: 3%;
  text-decoration: none;
  color: black;
  border-bottom: .1vw solid black;
}
}

`

export default NavLinks