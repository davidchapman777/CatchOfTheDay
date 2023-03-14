import { useAppContext } from "../context/appContext";
import styled from "styled-components";
import { FaAlignJustify } from 'react-icons/fa'

import {
  FormRow,
  FormRowSelect,
} from ".";

const SearchContainer = () => {
    const {
      isLoading,
      search,
      searchFishType,
      fishTypeOptions,
      searchFishSize,
      fishSizeOptions,
      sort,
      sortOptions,
      handleChange,
      clearFilters,
    } = useAppContext();
  const handleSearch = (e) => {
    handleChange({
      name: e.target.name,
      value:e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }

    return (
      <Wrapper>
        <div className="icon" >
          -<br/>
          -<br/>
          -<br/>
          -<br/>
          
        </div>
        <form className="form" >
          <div>
            <FormRow
              type='text'
              name='search'
              value={search}
              handleChange={handleSearch}
              className='search'
            />
            <FormRowSelect
              labelText='fish type'
              name='searchFishType'
              value={searchFishType}
              handleChange={handleSearch}
              list={['all',...fishTypeOptions]}
            />
            <FormRowSelect
              labelText='fish size'
              name='searchFishSize'
              value={searchFishSize}
              handleChange={handleSearch}
              list={['all',...fishSizeOptions]}
            />
            <FormRowSelect
              name='sort'
              value={sort}
              handleChange={handleSearch}
              list={sortOptions}
            />
            <button disabled={isLoading} onClick={handleSubmit} className='button'>Clear Filters</button>
          </div>
        </form>
      </Wrapper>
    );
  };
export default SearchContainer;

const Wrapper = styled.div`
z-index: 1;
position: fixed;
left: 0;
top: 17vh;
max-width: 29vh;
:hover{
  background-color: white;
  box-shadow: 10px 10px 10px;
  border-radius:10px;
}
.icon{
  position: relative;
  font-family: 'Raleway';
  font-size: 10vh;
  line-height: 1vh;
  width: 4vh;
}
#search{
  width: 25vw;
}
.icon:hover + .form{
  display: block;
}
.form{
  display: none;
  position: relative;
  top: -4vh;
  width: 30vh;
  padding-top: 5vh;
  padding-left: 1vw;
  
}
.form:hover{
  display: block;
}
.button{
  position: relative;
  font-size: 2.5vh;
  border: .1vw solid black;
  background-color: white;
  border-radius: 5px;
  margin-top: 2vh;
  text-align: center;
  
}
.button:hover{
  color:white;
  border:white;
  background-color: black;
}


`
