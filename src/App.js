import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from "./components/Nav";
import Home from "./pages/home/Home";


function App() {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route index='Home' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
