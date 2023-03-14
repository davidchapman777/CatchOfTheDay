import styled from "styled-components"

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
      
    <Wrapper>
          <label htmlFor="fishType">{labelText || name}</label>
          <br/>
          <select
            name={name}
            value={value}
        onChange={handleChange}
        className='input'
          >
            {list.map((type, index) => {
              return <option key={index} value={type}>
                {type}
              </option>
            })}
          </select>
    </Wrapper>
  )
}
export default FormRowSelect

const Wrapper = styled.div`
font-size: 2vh;
text-transform:capitalize;
.input{
  width: 20vh;
  height: 3vh;
  font-size: 2vh;
  border: none;
  border-bottom:.1vw solid black ;
  background: none;
}
`