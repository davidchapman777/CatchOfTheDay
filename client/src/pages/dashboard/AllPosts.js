import styled from "styled-components"
import { PostsContainer,SearchContainer } from "../../components"
const AllPosts = () => {
  return (
    <Wrapper>
      <div className="back">
      </div>
      <SearchContainer />
      <PostsContainer/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.back{
  position: fixed;
  width: 100%;
  margin: auto;
  left: 0;
  right:0;
  top: 0;
  bottom: 0;
  background-color: #08a9c5;
}
position: relative;
left: 26vw;
height: 100vh;
width: 70vw;
top: 21.5vh;

::-webkit-scrollbar {
    width: 40px;
}
::-webkit-scrollbar-track{
  background: white;
}
::-webkit-scrollbar-thumb {
  background: #f46e07;
}
`
export default AllPosts
