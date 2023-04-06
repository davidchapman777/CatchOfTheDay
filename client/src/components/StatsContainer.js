import StatItem from "./StatItem"
import { useAppContext } from '../context/appContext'
import styled from "styled-components"
import catFish from '../images/catFish.png'
import trout from '../images/trout.png'
import bass from '../images/bass.png'
import salmon from '../images/salmon.png'
import anglerFish from '../images/anglerFish.png'
import pike from '../images/pike.png'
// fishType: stats.fishType || 0,
// fishSize: stats.fishSize || 0,

const StatsContainer = () => {
  const { stats } = useAppContext()
  const defaultStats = [
    {
      title: 'catfish',
      count: stats.catfish || 0,
      icon: <img src={catFish} className='icon' alt="icon"/>,
    },
    {
      title: 'bass',
      count: stats.bass || 0,
      icon: <img src={bass }  className='icon' alt="icon"/>,
    },
    {
      title: 'trout',
      count: stats.trout || 0,
      icon: <img src={trout} className='icon' alt="icon"/>,
    },
    {
      title: 'salmon',
      count: stats.salmon || 0,
      icon: <img src={salmon } className='icon' alt="icon"/>,
    },
    {
      title: 'freshwater',
      count: stats.freshwater || 0,
      icon:<img src={pike } className='icon' alt="icon"/>,
    },
    {
      title: 'saltwater',
      count: stats.saltwater || 0,
      icon:<img src={anglerFish } className='icon' alt="icon"/>,
    },
  ]
  return (
    <Wrapper>
      <div className="title1">Catch Stats</div>
      <div className="container2">
      {defaultStats.map((item,index) => {
        return <StatItem key={index} {...item} />
      })}
      </div>
    </Wrapper>
  )
}
export default StatsContainer

const Wrapper = styled.div`

.title1{
  text-decoration: underline .1vw;
  text-align: center;
  position: fixed;
  top: 13%;
  right: 0;
  left: 0;
  font-size: 3vh;
}

.container2{
  display: grid;
  grid-template-columns: auto auto ; 
  font-size: 2.5vh;
  position: fixed;
  right: 0;
  left: 0;
  top: 18vh;
  margin: auto;
  width: 99%;
}
@media screen and (max-width: 850px) and (orientation: landscape) {
  .container2{
    grid-template-columns: auto auto;
    width: 50%;
    height: 50%;
    left: -100vh;
    position: absolute;
    top:25vh;
  }
  .title1{
font-size:5vh;
left: -53%;
top: 18%;
  }
  
}
@media only screen and (min-width: 1000px) {
  border: 0.1vw solid green;
  .container2{
    left: 0;
    right: 0;
    top: 17vh;
    width: 70%;
  }
}
`