import { useEffect } from "react"
import { useAppContext } from "../../context/appContext"
import { StatsContainer,Loading,ChartsContainer } from "../../components"
import styled from "styled-components"

const Stats = () => {
  const { showStats, isLoading } = useAppContext()
  
  useEffect(() => {
    showStats()
  }, [])
  
  if (isLoading) {
    return<Loading/>
  }

  return (
    <Wrapper>
      <div className="container">
      <StatsContainer/>
      <ChartsContainer/>
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
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
@media screen and (max-width: 850px) and (orientation: landscape){
  position: absolute;
  height: 100%;
  .container{
    position: absolute;
    height: 100%;
  }
}
`
export default Stats
