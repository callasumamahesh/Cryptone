import React from 'react'
import './App.css'
import MainPage from './Components/MainPage'
import SingleEmployee from './Components/SingleEmployee';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/employee" element={<SingleEmployee />}></Route>
      </Routes>
    </div>
  )
}

export default App;