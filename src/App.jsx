
import './App.css'
import {Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage/Homepage.jsx'

function App() {


  return (
    <>
        {/*toekomstige menubalk...*/}
      <Routes>
<Route path="/" element={<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
