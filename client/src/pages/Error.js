import styled from "styled-components"
import { Link } from "react-router-dom"
const Error = () => {
  return (
    <Wrapper>
      <div>oooops there was an error</div>
      <Link to='/'>take me home</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`
export default Error