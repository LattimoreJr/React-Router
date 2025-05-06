import { Routes, Route, Link } from "react-router-dom"
import default Red from "./Components/Red.jsx"
import default Blue from "./Components/Blue.jsx"

function App() {
 

  return (
    <div id="container">
    <div id="navbar">
      <Link to="/red">{<h1>Red</h1>}</Link>
      <Link to="/blue">{<h1>Blue</h1>}</Link>
    </div>
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<h1>Blue</h1>}/>
        <Route path="/red" element={<h1>Red</h1>}/>
      </Routes>
    </div>
  </div>
  )
}

export default App
