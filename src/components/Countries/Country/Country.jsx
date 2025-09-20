import React, { useState } from "react";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div
      className={`border-2 border-amber-600 p-5 rounded-2xl ${
        visited && "bg-amber-100"
      }`}
    >
      <img
        className="w-full h-40 object-cover rounded"
        src={country.flags.flags.png}
        alt=""
      />
      <div className="mt-4">
        <h3>Name: {country.name.common}</h3>
        <p>Languages: {country.population.population}</p>
        <p>
          Area: {country.area.area} -{" "}
          {country.area.area > 400000 ? "Big Area" : "Small Area"}
        </p>
        <button
          className="bg-amber-600 px-5 py-2 mt-2 text-white rounded-2xl"
          onClick={handleVisited}
        >
          {visited ? "Visited" : "Not Visited"}
        </button>
        <button
          className="bg-amber-600 px-5 py-2 mt-2 text-white rounded-2xl ml-4"
          onClick={() => {
            handleVisitedFlags(country.flags.flags.png);
          }}
        >
          Add Visited Flag
        </button>
      </div>
    </div>
  );
};

export default Country;
