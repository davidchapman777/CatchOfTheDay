import styled from "styled-components"


const FormRow = ({ type, value, name, handleChange, labelText }) => {
  return (
    <Wrapper>
          <label>{labelText || name}</label>
          <br/>
          <input
            type={type}
            placeholder='enter text'
            value={value}
            name={name}
            onChange={handleChange}
            className='input'
          />
    </Wrapper>
  )
}
export default FormRow

const Wrapper = styled.div`
font-size: large;
text-transform:capitalize;

.input{
  width: 70%;
  
  border: none;
  border-bottom:.1vw solid black ;
  background:none;
  ::placeholder{
    color: black;
  }
}
`