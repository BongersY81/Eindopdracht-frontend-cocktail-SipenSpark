import sipenspark from '../../assets/sipenspark.PNG';
import './Homepage.css'
import Navigation from "../../components/navigation/Navigation.jsx";


function Homepage () {
    return (
        <>
<Navigation/>
        <section className="image-container">
        <img src={sipenspark} alt="sipenspark"/>
        </section>
            </>
  )
}



export default Homepage;
