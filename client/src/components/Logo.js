import styled from "styled-components"
import { Link } from "react-router-dom"
const Logo = () => {
    return (
        <Wrapper>
            <Link to='/' className="link">
                Catch Of The Day
            </Link>
      </Wrapper>
  )
}

const Wrapper = styled.div`
.link{
    text-shadow: 3px 3px 5px black;
    color: #28dbe2;
    text-decoration: none;
}
`
export default Logo