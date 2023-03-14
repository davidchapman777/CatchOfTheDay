import styled from "styled-components"
import links from "../utils/links"
import { useAppContext } from '../context/appContext'
import NavLinks from "./NavLink"

const BigSidebar = () => {
  const { showSidebar, toggleSidebar }=useAppContext()

  return (
    <Wrapper>
      <div className={showSidebar? 'sb-show':'sb-dont'}>
        <div>
          <NavLinks toggleSidebar={{toggleSidebar}}/>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
position: relative;
top: 90vh;
z-index: 1;
text-align: center;
/* @media screen and (max-width: 260px) {
  display: none;
} */

`
export default BigSidebar