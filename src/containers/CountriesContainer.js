import { useState, useEffect } from "react"
import Countries from "../components/Country";
import CountriesList from "../components/CountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        updateCountryData();
    }, []);

    const updateCountryData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();
        setCountries(data);
    }

    return (
       countries ? <CountriesList countries={countries}/> : <p>Loading</p>
    );

};

export default CountriesContainer;