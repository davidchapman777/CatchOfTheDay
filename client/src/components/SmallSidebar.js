import styled from "styled-components"
import { useAppContext } from '../context/appContext'
import NavLinks from "./NavLink"
const SmallSidebar = () => {
  const { showSidebar, toggleSidebar }=useAppContext()
  return (
    <Wrapper>
      <div className={showSidebar? 'sb-show':'sb-dont'}>

      <div>
          {/* <button type="button" onClick={toggleSidebar}>X</button> */}
          <br/>
      </div>
        <div>
          <NavLinks toggleSidebar={{toggleSidebar}}/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 26vw;
height: 16.5vw;
position: fixed;
top: 30vh;

.sb-show{
    display: block;
    height: 45vh;
  }
  .sb-dont{
    display: none;
  }

`
export default SmallSidebar