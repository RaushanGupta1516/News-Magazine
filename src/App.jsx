
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import  Newsbox from './Newsbox'
function App() {
  const [category, setcategory] = useState("general");
  return (
    <>
      <Navbar setcategory={setcategory} />
      <Newsbox category={category} />
    </>
  )
}

export default App
