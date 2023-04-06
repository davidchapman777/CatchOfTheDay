import styled from "styled-components"
import { FormRow, Alert,FormRowSelect } from '../../components'
import { useAppContext } from "../../context/appContext"

const AddPost = () => {
  const {
    showAlert,
    displayAlert,
    title,
    content,
    catchLocation,
    fishTypeOptions,
    fishType,
    fishSizeOptions,
    fishSize,
    image,
    isEditing,
    handleChange,
    clearValues,
    isLoading,
    createPost,
    editPost,
  } = useAppContext()

  const handlePostInput =  (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'image') {
      value=e.target.files[0]
    }
    handleChange({ name, value })
    console.log({ name, value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(title, content, image, catchLocation, fishSize, fishType)
    if (!title || !content || !catchLocation) {
      displayAlert()
      return
    }
    if (isEditing) {
      editPost()
      return
    }
    createPost()
  }
  return (
    <Wrapper>
      <div className="container">

        <h3 className="title">{isEditing ? 'Edit Post' : 'Add Post'}</h3>
        {showAlert && <Alert />}
        <form encType='multipart/form-data' className="form">
          <div className="div3">
          <div>  
            <FormRow
              type='text'
              name='title'
              value={title}
              handleChange={handlePostInput}
              />
          </div>
          <div>  
            <FormRow
              type='file'
              name='image'
              accept=".png, .jpg, .jpeg"
              handleChange={handlePostInput}
              />
          </div>
          <div> 
            <textarea
              placeholder="tell the world about your catch of the day!"
              name='content'
              value={content}
              onChange={handlePostInput}
              rows={7}
              cols={40}
              className='content'
              wrap="hard"
              />
          </div>
          <div> 
            <FormRow
              type='text'
              name='catchLocation'
              labelText='catch location'
              value={catchLocation}
              handleChange={handlePostInput}
              />
          </div>
          <div>
            <FormRowSelect
              name='fishType'
              labelText='fish type'
              value={fishType}
              handleChange={handlePostInput}
              list={fishTypeOptions}
              />
          </div>
          <div>
              <FormRowSelect
              name='fishSize'
              labelText='fish size'
              value={fishSize}
              handleChange={handlePostInput}
              list={fishSizeOptions}
              />
           </div>
          </div>
          <div className="btns">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className='submit-btn'
          >
            
          submit
        </button>
        <button onClick={(e) => {
          e.preventDefault()
          clearValues()
        }}
        className='clear-btn'
        >clear values</button>
        </div>
      </form>

        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
 position: fixed;
  width: 100%;
  left: 0;
  right:0;
  top: 0;
  bottom: 0;
  background-color: #08a9c5;
  
.container{
  width: 70%;
  margin: auto;
  z-index: 1;
  top: 15vh;
  left: 0;
  right: 0;
  position: fixed;
}
.title{
  font-size: 3vh;
  margin-bottom: 1vh;
  margin-top: 2vh;
}
.content{
  border: none;
  border-bottom: .1vw solid black;
  font-size: 2vh;
  width: 60vw;
  margin-top: 1vh;
  background: none;
  ::placeholder{
    color: black;
  }
}
.submit-btn{
background-color: #08a9c5;
border: .1vw solid black;
border-radius: 10px;
margin-right: 1vw;
margin-top: 1vh;
font-size: 2vh;
color: black;
}
.submit-btn:hover{
  background-color: black;
  color: white;
}
.clear-btn{
  font-size: 2vh;
  background-color: #08a9c5;
  border: .1vw solid black;
  border-radius: 10px;
  color: black;
}
.clear-btn:hover{
  background-color: black;
  color: white;
}
@media screen and (max-width: 850px) and (orientation: landscape){
.div3{
  columns: 2;
  height: 50vh;
  line-height: 6vh;
}  
.btns{
  position: absolute;
  left: 70vh;
  bottom: 0vh;
}
.submit-btn{
margin-right: 1vw;
top: -5vh;
position: relative;
font-size: 5vh;
}
.clear-btn{
  font-size: 5vh;
  position: relative;
  top: -5vh;
  font-weight: bold;
}
.content{
width: 60vh;

}
}
@media only screen and (min-width: 1000px) {
.form{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 5vh;
}
.btns{
  margin: auto;
  .submit-btn{
    width: 30vh;
  }
  .clear-btn{
  width: 30vh;
  }
}
}
`
export default AddPost
