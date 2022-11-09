import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Member from "./components/Member";
import MemberList from "./components/MemberList";

function App() {
  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path='/api/members' element={<MemberList/>}/>
          <Route exact path='/api/members/add' element={<Member/>}/>
          <Route exact path='/api/members/:id' element={<Member/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;