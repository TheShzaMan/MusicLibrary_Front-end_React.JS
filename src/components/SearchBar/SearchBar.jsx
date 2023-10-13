import React, { useState } from "react";
import InputField from "../InputField/InputField";
import MusicTable from "../MusicTable/MusicTable";

const SearchBar = ({ songLibrary = [] }) => {
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	console.log(searchInput);

	const handleSearchChange = (e) => {
		setSearchInput(e);

		const results = songLibrary.filter((song) => {
			for (const i in song) {
				if (
					song[i]
						.toString()
						.toLowerCase()
						.includes(searchInput.toString().toLowerCase())
				) {
					return true;
				}
			}
			return false;
		});

		setSearchResults(results);
	};

	return (
		<form className='search-container'>
			<InputField
				label='Search Library'
				value={searchInput}
				onChange={handleSearchChange}
			/>
			<div className='results-table'>
				<MusicTable songLibrary={searchResults} />
			</div>
		</form>
	);
};

export default SearchBar;
