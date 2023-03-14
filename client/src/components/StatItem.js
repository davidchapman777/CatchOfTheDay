import styled from 'styled-components'

const StatItem = ({count, title, icon}) => {
  return (
    <Wrapper>
    <div className='item'>
      <span className='icon'>{icon}</span>
      <span className='title'> {title} : </span>
      <span className='count'>{count}</span>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
color: #ff6200;
.item{
  max-height: 4vh;
  background-color: white;
  border-radius:10px;
  box-shadow: 10px 10px 10px black;
  padding-bottom:1vh;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 2vh;
  text-align: center;
  transition: .5s;
  .title{
    position: relative;
    top: -1.5vh;
    max-height: 1vh;
  }
  .count{
    position: relative;
    top: -1.5vh;
    max-height: 1vh;
  }
  .icon{
    max-height: 5vh;
  }
}
.item:hover{
  transform: scale(1.1);
}

`
export default StatItem