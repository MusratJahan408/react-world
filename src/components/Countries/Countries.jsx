import { use } from "react";
import Country from "./Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-bold mb-10">
        Hello Countries {countries.length}
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
