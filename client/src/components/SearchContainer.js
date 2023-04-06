import { useAppContext } from "../context/appContext";
import styled from "styled-components";
import { useState } from "react";
import {
  FormRow,
  FormRowSelect,
} from ".";

const SearchContainer = () => {
  const [form, setForm]=useState(false)
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
  const showForm = () => {
  setForm(!form)
}
    return (
      <Wrapper>
        <div className="btn1" >
          <button type='button'className="icon" onClick={showForm}>
          -<br/>
          -<br/>
          -<br/>
          -<br/>
          </button>
        </div>
        {form &&
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
        }
      </Wrapper>
    );
  };
export default SearchContainer;

const Wrapper = styled.div`
z-index: 5;
position: fixed;
left: 0;
top: 17vh;
max-width: 29vh;

.icon{
  position: relative;
  font-family: 'Raleway';
  font-size: 15vh;
  line-height: 1.5vh;
  padding: 0;
  margin: 0;
  border: 0.1vw solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 10px black;
  z-index: 5;
  width: 7vh;
  height: 8vh;
  padding-bottom: 4vh;
  color: black;
  background: white;
}
.btn1{
  height: 8vh;
  width: 8vh;
  position: relative;
  top: -1%;
}

.form{
  position: relative;
  top: -8vh;
  width: 25vh;
  height: 35vh;
  padding-left: 1vw;
  border: 0.1vw solid black;
  z-index: 0;
  background: white ;
  padding: 3vh;
  padding-top: 9vh;
  line-height: 4vh;
  border-radius: 10px;
  box-shadow: 10px 10px 10px black;
}

.button{
  position: relative;
  font-size: 2.5vh;
  border: .1vw solid black;
  background-color: white;
  border-radius: 5px;
  margin-top: 2vh;
  text-align: center;
  color: black;
}
.button:hover{
  color:white;
  border:white;
  background-color: black;
}
@media screen and (max-width:850px) and (orientation: landscape){
  top: 12vh;
  .icon{
  font-size: 24vh;
  line-height: 2.5vh;
  padding: 0;
  margin: 0;
  width: 15vh;
  height: 15vh;
  padding-bottom: 4vh;
  box-shadow: 5px 5px 5px ;
}
.btn1{
  height: 8vh;
  width: 8vh;
  top: 7vh;
}
.form{
  top: -8vh;
  width: 70vh;
  height: 58vh;
  padding-left: 1vw;
  padding: 3vh;
  
  padding-left: 20vh;
  line-height: 6vh;
}
.button{
  font-size: 4vh;
  border: .1vw solid black;
  margin-top: 2vh;
}
}

`
