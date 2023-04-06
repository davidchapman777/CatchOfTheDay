import { useEffect } from "react"
import Loading from "./Loading"
import Post from "./Post"
import { useAppContext } from "../context/appContext"
import PageBtnContainer from "./PageBtnContainer"
import styled from "styled-components"
const PostsContainer = () => {
  const {
    getPosts,
    posts,
    isLoading,
    page,
    totalPosts,
    search,
    searchFishType,
    searchFishSize,
    sort,
    numOfPages,
  } = useAppContext()
  
  useEffect(() => {
    getPosts()
    // eslint-disable-next-line
  }, [ search,
    searchFishType,
    searchFishSize,
    sort,
    page])
  if (isLoading) {
    return <Loading/>
  }
  if (posts.length === 0) {
    return (
      <Wrapper>
      <div className="no-posts">
        No posts to display...
      </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div className="posts">
      {totalPosts} post{posts.length > 1 && 's'}
      </div>
      <div className="container">
      {posts.map((post) => {
        return <Post key={post._id}{...post} />
      })}
      {numOfPages > 1 && <PageBtnContainer />}
      </div>
    </Wrapper>
  )
}
export default PostsContainer

const Wrapper = styled.div`

.container{
  position: absolute;
  padding-bottom: 20vh;
  
}
.posts{
  border:.1vw solid black;
  position: fixed;
  top:13%;
  left: 0;
  text-align: center;
  width: 99.8%;
  font-size: 3vh;
  background-color: white;
  z-index: 1;
}
.no-posts{
  border:.1vw solid black;
  width: 99.8%;
  position: fixed;
  top:12.9vh;
  left: 0;
  text-align: center;
  z-index: 1;
  font-size: 3vh;
  background-color: white;
}
@media screen and (max-width: 850px) and (orientation: landscape){
  .posts{
    font-size: 6vh;
  }
}
@media only screen and (min-width: 1000px) {
  position: absolute;
  
  .container{
    display: grid;
    grid-template-columns: auto auto;
  }
  
}
@media only screen and (min-width: 1500px) {
  position: absolute;
  
  .container{
    display: grid;
    grid-template-columns: auto auto auto;
  }
  
}
`