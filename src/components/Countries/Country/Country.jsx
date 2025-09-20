import React from "react";

const Country = ({ country }) => {
  const handleVisited = () => {
    console.log("visited");
  };
  return (
    <div className="border-2 border-amber-600 p-5 rounded-2xl">
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
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Country;
