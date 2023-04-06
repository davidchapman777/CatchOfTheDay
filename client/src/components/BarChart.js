import {
    BarChart,
    Bar, 
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'
import styled from 'styled-components'


const BarChartComponent = ({data}) => {
    return (
      <Wrapper>
      <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data} margin={{ top: 50 }} >
              <CartesianGrid strokeDasharray='0 0' stroke='#83f541'/>
              <XAxis dataKey='date' stroke='#83f541'/>
              <YAxis allowDecimals={false}stroke='#83f541'/>
                    <Tooltip cursor={{fill:'transparent'}} />
              <Bar type='monotone' dataKey='count' fill='#f98705' barSize={10}/> 
          </BarChart>
    </ResponsiveContainer>
      </Wrapper>
  )
}
const Wrapper = styled.div`
position: fixed;
height: 30vh;
width:90%;
margin: auto;

@media only screen and (min-width: 1000px) {
left: 0;
right: 4vh;
margin: auto;
width: 70%;
}
@media screen and (max-width: 850px) and (orientation: landscape){
    width: 55%;
    height: 70%;
    left: 43%;
    top: 13%;
}
`
export default BarChartComponent