import React from "react";
import Log from './Log';
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Sign from './Sign';
import Newpost from './Newpost';
import Header from './Header'
import './App.css';
import Post from './Post';
import Postid from './Postid'
function App() {
    return (
      
        <BrowserRouter>
            <Log />
            <Routes>
            <Route path="/"  element={<Header/>}/>
            <Route path="/Sign"  element={<Sign/>}/>
            <Route path="/Newpost"  element={<Newpost/>}/>
            <Route path="/post"  element={<Post/>}/>
            <Route path="/post/:postid" element={<Postid/>}/>

            </Routes>   
          
          
        </BrowserRouter>

    )
}
export default App;