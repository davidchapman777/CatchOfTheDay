import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'
import styled from 'styled-components'

const AreaChartComponent = ({data}) => {
  return (
      <Wrapper>
          <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={data} margin={{ top: 50 }}>
                  <CartesianGrid strokeDasharray='0 0' stroke='#83f541'/>
                  <XAxis dataKey='date' stroke='#83f541'/>
                  <YAxis allowDecimals={false} stroke='#83f541'/>
                  <Tooltip />
                  <Area type='monotone' dataKey='count' stroke='#83f541' fill='#fc6f02'/>
              </AreaChart>
          </ResponsiveContainer>
     </Wrapper>
  )
}
const Wrapper = styled.div`
position: fixed;
height: 30vh;
width:90vw;
left: 1.5vh;
margin: auto;

@media only screen and (min-width: 1000px) {
left: 0;
right: 4vh;
margin: auto;
width: 70%;
}
`
export default AreaChartComponent