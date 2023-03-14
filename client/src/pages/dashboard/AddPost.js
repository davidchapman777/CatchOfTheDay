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
        <FormRow
          type='text'
          name='title'
          value={title}
          handleChange={handlePostInput}
          />
        <FormRow
          type='file'
          name='image'
          accept=".png, .jpg, .jpeg"
          handleChange={handlePostInput}
          />
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
        
        <FormRow
          type='text'
          name='catchLocation'
          labelText='catch location'
          value={catchLocation}
          handleChange={handlePostInput}
          />
        <FormRowSelect
          name='fishType'
          labelText='fish type'
          value={fishType}
          handleChange={handlePostInput}
          list={fishTypeOptions}
          />
        <FormRowSelect
          name='fishSize'
          labelText='fish size'
          value={fishSize}
          handleChange={handlePostInput}
          list={fishSizeOptions}
          />
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
  line-height: 3vh;
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
}
.submit-btn{
background-color: #08a9c5;
border: .1vw solid black;
border-radius: 10px;
margin-right: 1vw;
margin-top: 1vh;
font-size: 2vh;
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
}
.clear-btn:hover{
  background-color: black;
  color: white;
}

@media only screen and (min-width: 1000px) {
font-size: 3vh;
.form{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 8vh;
}
.submit-btn{
position: absolute;
bottom: -2vh;

}
.clear-btn{
 bottom: -2vh;
 position: absolute;
 left: 10vh;
}
}
`
export default AddPost
