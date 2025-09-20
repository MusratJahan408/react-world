import { use, useState } from "react";
import Country from "./Country/Country";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-bold mb-6">
        Hello Countries {countries.length}
      </h1>
      <h3 className="text-2xl font-semibold mb-5">
        Total Country Visited: {visitedCountries.length}
      </h3>
      <h3 className="text-2xl font-semibold mb-5">
        Total Flags Visited : {visitedFlags.length}
      </h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="flex gap-3 my-10">
        {visitedFlags.map((flag, index) => (
          <img key={index} className="w-28" src={flag}></img>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
