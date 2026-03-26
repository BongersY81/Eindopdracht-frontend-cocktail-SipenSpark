
import './App.css'
import {Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage/Homepage.jsx'
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
function App() {


  return (
    <>
        <Header/>
        {/*toekomstige menubalk...*/}
      <Routes>
<Route path="/" element={<Homepage/>}/>
      </Routes>
        <Footer/>
    </>
  )
}

export default App
