import React from "react";
import axios from "axios";

const MusicTable = ({ songLibrary }) => {
	const tableRow = songLibrary.map((song) => <SongData song={song} />);
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
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
};
export default MusicTable;
