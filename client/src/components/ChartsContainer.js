import BarChartComponent from "./BarChart"
import AreaChartComponent from "./AreaChart"
import { useAppContext } from "../context/appContext"
import { useState } from "react"
import styled from "styled-components"


const ChartsContainer = () => {
  const [barChart, setBarChart]=useState(true)
  const { monthlyCatches:data }=useAppContext()
  return (
    <Wrapper>
      <button type="button" onClick={() => setBarChart(!barChart)} className='chart-btn'>
        {barChart? 'click for area chart':'click for bar chart'}
      </button>
      {barChart ? 
        <BarChartComponent data={data} />
        :
        <AreaChartComponent data={data} />
      }
    </Wrapper>
  )
}
const Wrapper = styled.div`
position:fixed;
height: 35%;
bottom: 12%;
width:99%;
margin: auto;
text-align: center;
.chart-btn{
  background: none;
  border: .1vw solid black;
  border-radius: 10px;
  font-size: 2vh;
  transition: .5s;
  top:10%;
  position: relative;
  z-index: 2;
  color: black;
}
.chart-btn:hover{
  background-color: black;
  color: white;
  box-shadow: 5px 5px 10px black;
  border: 0.1vw solid white;
  transform: scale(1.1);
}

@media only screen and (max-width: 850px) and (orientation: landscape){
width: 54%;
left: 45%;
top: 1vh;
height: 60%;
}
.chart-btn{
  border: .1vw solid black;
  border-radius: 10px;
  font-size: 4vh;
  transition: .5s;
  top:1%;
  position: relative;
  z-index: 2;
}
`
export default ChartsContainer