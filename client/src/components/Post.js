import moment from 'moment'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { FaWeightHanging } from 'react-icons/fa'
import { BsCalendar3 } from 'react-icons/bs'
import { GiFishingHook } from 'react-icons/gi'
import { TbMapSearch } from 'react-icons/tb'
import { GiAnglerFish } from 'react-icons/gi'
import styled from 'styled-components'

const Post = ({ _id, title, content, image, catchLocation, fishType, fishSize, createdAt }) => {
  const { setEditPost, deletePost,user }=useAppContext()
  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY');
  return (
    <Wrapper>
      <span>Posted by : {user?.name}</span>
      <h2 className='title'>{title}</h2>
      <div>
        <img src={image} className='image' alt='post-image'/>
      </div>
      <div className='content'>
         <span>{content}</span>
      </div>
      <div>
        <BsCalendar3 className='icon'/> {date}
      </div>
      <div>
        <TbMapSearch className='icon'/> {catchLocation}
      </div>
      <div>
        <GiAnglerFish className='icon'/> {fishType}
      </div>
      <div>
        <FaWeightHanging className='icon'/> {fishSize}
      </div>
      <br/>
      <br/>
      <br/>
      <div className='btn-container'>
        <button type='button' className='edit'>
        <Link to='/add-post' onClick={()=>setEditPost(_id)} className='link'>edit post</Link>
        </button>
        <button onClick={()=>deletePost(_id)} className='delete'>delete post</button>
      </div>
    </Wrapper>
  )
}
export default Post

const Wrapper = styled.div`
text-align: center;
position: relative;
width: 70vw;
right: 10vw;
font-size: 2.5vh;
top: -2vh;
height: 65vh;
margin-bottom: 5vh;
background-color: white;
box-shadow: 10px 10px 10px;
border-radius: 10px;
transition:.5s;
:hover{
  transform: scale(1.05);
}

.content{
  overflow-wrap: break-word;
  position: relative;
  top: -5vh;
  font-size: 2vh;
  padding: 1vw;
  width: 85%;
  height: 10vh;
  overflow-y: scroll;
  border: .1vw solid black;
  margin: auto;
  margin-bottom: -2vw;
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track{
  background: white;
  box-shadow: inset 0 0 6px grey;
}
::-webkit-scrollbar-thumb {
  background: #f46e07;
  border-radius: 10px;
  
}
}
.btn-container{
  display: flex;
  font-size: 2vh;
  position: absolute;
  bottom: 2vh;
  width: 69.5vw;
  justify-content: center;
  margin: auto;
  .edit{
    margin: 1vw;
    border-radius: 5px;
    border: .1vw solid black;
    transition: .5s;
    background-color: white;
    width:20vh;
    .link{
      text-decoration: none;
      color: black;
      margin: 1vw;
    }
  }
  .delete{
    margin: 1vw;
    border: .1vw solid black;
    border-radius: 5px;
    transition: .5s;
    background-color: white;
    width:20vh;
  }
}
.title{
  position: relative;
  top: -3vh;
  padding-top: 1vh;
}
.image{
  max-width: 30vw;
  position: relative;
  top: -5vh;
}
.icon{
  color:#f46e07;
  position: relative;
}

.edit:hover{
   background-color: black;
   .link{
      color: white;
    }
  }
  .delete:hover{
    background-color: black;
    color:white;
 
}

@media only screen and (min-width: 1000px) {
  position: relative;
  margin: 2vw;
  width: 30vw;
  .btn-container{
    width: 29.7vw;
  }
}
@media only screen and (min-width: 1500px) {
  position: relative;
  margin: 2vw;
  width: 20vw;
  .btn-container{
    width: 19.8vw;
  }
}

`