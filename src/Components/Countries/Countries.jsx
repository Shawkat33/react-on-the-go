import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
	const countriesData = use(countriesPromise);
	const countries = countriesData.countries;
	const [visitedCountries, setVisitedCountries] = useState([]);
	const [visitedFlags, setVisitedFlags] = useState([]);

	const handleVisitedFlags = (flag) => {
		// console.log("Flag to be added", flag);
		let newVisitedFlags = [...visitedFlags, flag];
		if (!visitedFlags.includes(flag)) {
			setVisitedFlags(newVisitedFlags);
		} else {
			newVisitedFlags = visitedFlags.filter((vflag) => vflag !== flag);
			setVisitedFlags(newVisitedFlags);
		}
	};

	const handleVisitedCountries = (name) => {
		// console.log("Clicked", name.common);
		let newVisitedCountries = [...visitedCountries, name.common];
		if (!visitedCountries.includes(name.common)) {
			setVisitedCountries(newVisitedCountries);
		} else {
			newVisitedCountries = visitedCountries.filter(
				(country) => country !== name.common
			);
			setVisitedCountries(newVisitedCountries);
		}
	};
	// console.log(countries);

	return (
		<div className="countries">
			<div className="countriesTitle">
				<h1>No. of Countries: {countries.length}</h1>
				<h3>Total countries visited: {visitedCountries.length}</h3>
				<ol
					style={{
						listStyleType: "none",
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
					}}
				>
					{visitedCountries.map((country) => (
						<li key={country}>{country}</li>
					))}
				</ol>
				<h3>Total Flags Visited: {visitedFlags.length}</h3>
				<ol
					style={{
						listStyleType: "none",
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						rowGap: "10px",
					}}
				>
					{visitedFlags.map((flag, index) => (
						<li key={index}>
							<img style={{ height: "20px" }} src={flag} alt="" />{" "}
						</li>
					))}
				</ol>
			</div>
			{countries.map((country) => (
				<Country
					key={country.cca3.cca3}
					country={country}
					handleVisitedCountries={handleVisitedCountries}
					handleVisitedFlags={handleVisitedFlags}
				></Country>
			))}
		</div>
	);
};

export default Countries;
