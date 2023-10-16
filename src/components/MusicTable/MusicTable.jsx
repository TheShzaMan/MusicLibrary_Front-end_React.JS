import React from "react";
import axios from "axios";
import SongRow from "../SongRow/SongRow";
import "./MusicTable.css";

const MusicTable = ({ songLibrary = [] }) => {
	const tableRow = songLibrary.map((song) => (
		<SongRow key={song.id} song={song} />
	));
	// console.log(song);
	return (
		<div className='tbl-container'>
			{/* <h2>{tableTitle}</h2> */}
			<table className='tbl'>
				<thead>
					<tr className='heading'>
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
