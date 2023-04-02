import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  AddUser from  './Layout/Pages/AddUsers/AddUser';
import  DisplayAllUser from  './Layout/Pages/DisplayAllUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/DisplayAllUser" element={<DisplayAllUser/>} />
      </Routes>
    </Router>
  );
}



export default App;
