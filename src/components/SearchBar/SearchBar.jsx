import React, { useState } from "react";
import InputField from "../InputField/InputField";
import MusicTable from "../MusicTable/MusicTable";
import { Collapse } from "bootstrap";
import "./SearchBar.css";

const SearchBar = ({ songLibrary = [] }) => {
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	console.log(searchInput);

	// const handleChange = (e) => {
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
		<div className='s-container'>
			<div className='searchbar'>
				<div className='label '>Search Library</div>
				<div className='inputfield btn-group'>
					<div
						type='button'
						data-bs-toggle='collapse'
						data-bs-auto-close='body'
						data-bs-target='#musicTable'
						aria-expanded='false'
						aria-controls='musicTable'
					>
						<input
							className='text-box  w3-border w3-round-xlarge '
							value={searchInput}
							onChange={(e) => handleSearchChange(e.target.value)}
						/>

						{/* <InputField
							className='text-box'
							value={searchInput}
							onChange={handleSearchChange}
						/> */}
					</div>
				</div>
			</div>
			<div
				className='collapse w3-row w3-table w3-bordered results'
				id='musicTable'
			>
				<MusicTable songLibrary={searchResults} className='results' />
			</div>
		</div>
	);
};

export default SearchBar;
