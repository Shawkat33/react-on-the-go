import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
	// console.log(country[0]);

	const { name, currencies, flags, region, continents, population, area } =
		country;

	// console.log(flags);
	const [visited, setVisited] = useState(false);

	const handleVisited = () => {
		// Basic can be done using if else or using ternary system
		setVisited(!visited);
		handleVisitedCountries(name);
	};

	return (
		<div className="country">
			<div className="countryTitle">
				<img
					src={flags.flags?.svg}
					alt={flags.flags?.alt}
					className="countryImg"
				/>
				<h2>Name: {name.common}</h2>
			</div>
			<h3>Area: {area.area}</h3>
			{area.area > 100000 ? <p>Big Country</p> : <p>Small Country</p>}
			<h4>Region: {region.region}</h4>
			<h4>Continent: {continents.continents}</h4>
			<h4>Population: {population.population}</h4>
			<h4>Currency: {Object.values(currencies.currencies)[0]?.name}</h4>
			<button
				onClick={handleVisited}
				className={`${visited && "countryVisited"}`}
			>
				{!visited ? "Not Visited" : "Visited"}
			</button>
			<button onClick={() => handleVisitedFlags(flags.flags?.svg)}>
				Add Country Flag
			</button>
		</div>
	);
};

export default Country;

/**
 *
 * 1. Inline CSS(Style Object)
 * 2.
 *
 */
