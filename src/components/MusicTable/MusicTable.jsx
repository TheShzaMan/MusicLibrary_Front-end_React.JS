import React from "react";
import axios from "axios";
import SongRow from "../SongRow/SongRow";

const MusicTable = ({ songLibrary = [] }) => {
	const tableRow = songLibrary.map((song) => (
		<SongRow key={song.id} song={song} />
	));
	// console.log(song);
	return (
		<div className='table-container'>
			{/* <h2>{tableTitle}</h2> */}
			<table className='table'>
				<thead>
					<tr>
						<th>Title</th>
						<th>Artist</th>
						<th>Album</th>
						<th>Release Date</th>
						<th>Genre</th>
					</tr>
				</thead>
				<tbody>{tableRow}</tbody>
			</table>
		</div>
	);
};
export default MusicTable;
