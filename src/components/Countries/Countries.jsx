import { use, useState } from "react";
import Country from "./Country/Country";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-bold mb-6">
        Hello Countries {countries.length}
      </h1>
      <h3 className="text-2xl font-semibold mb-10">
        Total Country Visited: {visitedCountries.length}
      </h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="grid grid-cols-4 gap-5">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
