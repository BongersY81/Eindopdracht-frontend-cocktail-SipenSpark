import './App.css'
import {Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage/Homepage.jsx'
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import SearchByName from "./pages/search-by-name/SearchByName.jsx";



function App() {


    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="search-by-name" element={<SearchByName/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
