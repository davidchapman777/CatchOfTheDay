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
        {barChart? 'Area Chart':'Bar Chart'}
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
height: 38vh;
bottom: 15vh;
width:99.9%;
margin: auto;
text-align: center;

.chart-btn{
  background-color: white;
  border: .1vw solid black;
  border-radius: 10px;
  font-size: 2vh;
  transition: .5s;
}
.chart-btn:hover{
  background-color: black;
  color: white;
  box-shadow: 5px 5px 10px black;
  border: 0.1vw solid white;
  transform: scale(1.1);
}

@media only screen and (min-width: 1000px) {

}

`
export default ChartsContainer