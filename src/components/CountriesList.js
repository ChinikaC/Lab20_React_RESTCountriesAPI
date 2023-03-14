import CountriesContainer from "../containers/CountriesContainer";
import Country from "./Country";

const CountriesList = ({countries}) => {
    const countryComponents = countries.map((country, index)=>{
        return <Country country = {country} key={index}/>
    })

    return (
        <>
        <ul>
            {countryComponents}
        </ul>
        
        </>
    )
}

export default CountriesList;