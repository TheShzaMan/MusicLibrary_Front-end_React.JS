import "./Selector.css";
import React, { useState } from "react";
import MusicTable from "../MusicTable/MusicTable";

const Selector = ({ cardTitle, songLibrary = [], searchTerm }) => {
	const [cardResults80, setCardResults80] = useState([]);
	const [cardResults90, setCardResults90] = useState([]);
	const [cardResultsEs, setCardResultsEs] = useState([]);
	const [cardResultsCR, setCardResultsCR] = useState([]);

	// NEED to have a different collapse target per query.  Only 5mins until class :(  //

	const results = songLibrary.filter((song) => {
		for (const i in song) {
			if (
				song[i]
					.toString()
					.toLowerCase()
					.includes(searchTerm.toString().toLowerCase())
			) {
				return true;
			}
		}
		return false;
	});
	// setCardResults(results);

	return (
		<div className='inputfield btn-group'>
			<div
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#selectorResults'
				aria-expanded='false'
				aria-controls='selectorResults'
			>
				<div className='w3-container selectors'>
					<div className='nw-selector w3-card w3-center'>
						<p className='mt-3 w3-xxlarge'>{cardTitle}</p>
					</div>
				</div>
			</div>
			<div
				id='selectorResults'
				className='collapse w3-row w3-row w3-table w3-col s5 mb-1 card'
			>
				<MusicTable songLibrary={results} className='cardResults' />
			</div>
		</div>
	);
};

export default Selector;
