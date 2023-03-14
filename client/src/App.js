import { Landing, Error, Register, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddPost, AllPosts, Profile, SharedLayout, Stats, UploadImage } from './pages/dashboard'
import styled from "styled-components";
function App() {
  return (
    <Wrapper>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <SharedLayout/>
          </ProtectedRoute>
        }>
          <Route path="" element={<Profile/>}/>
          <Route path="stats" element={<Stats/>}/>
          <Route path="add-post" element={<AddPost/>}/>
          <Route path="all-posts" element={<AllPosts/>}/>
        </Route>
        <Route path="upload-image" element={<UploadImage/>}/>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
          </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`

`