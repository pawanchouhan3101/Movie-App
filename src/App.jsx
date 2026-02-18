import Navbar from './Navbar'
import './App.css'
import Hero from './Hero'
import Home from './Home'
import Footer from './Footer'
import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

 

  return (
    <>
  <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
      />
      {searchTerm === "" && category==="all"&& <Home />}

      <Hero searchTerm={searchTerm} category={category} />
    <Footer setCategory={setCategory}/>
</>
  )
}

export default App
