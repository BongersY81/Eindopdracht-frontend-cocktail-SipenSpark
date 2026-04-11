import imageOpNaam from '../../assets/image-op-naam.png';
import './SearchByName.css';
import axios from "axios";
import {useState} from "react";


function SearchByName() {
    const [cocktailByName, setCocktailByName] = useState();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault();

        toggleLoading(true);
        try {
            const result = await
                axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            console.log(result.data);
            setCocktailByName(result.data);
        } catch (error) {
            console.log(error);
            toggleError(true);
        } finally {
            toggleLoading(false)
        }
    }

    return (
        <>

            <section className="search-by-name-container">
                <img src={imageOpNaam} alt="image-op-naam"/>
            </section>

            <div className="container">

                <article className="input-field">
                    <form onSubmit={handleSubmit}>
                        <p>Cocktailnaam</p>
                        <input
                            type="search"
                            id="Form-cocktail-information"
                            name="input-field"
                            value={cocktailByName}
                            onChange={(e) => setCocktailByName(e.target.value)}
                        />

                        <button className="send-button" disabled={loading === true}> Verzenden</button>
                        {error && <p className="error-message">Er is iets misgegaan. Probeer het nog eens opnieuw.</p>}
                        {loading && <p className="loading-countries">De informatie wordt opgehaald</p>}


                    </form>


                </article>

                <article className="cocktail-information">

                </article>
            </div>


        </>

    )
}

export default SearchByName;


