import React from "react";

const SongRow = ({ song }) => {
	return (
		<tr key={song.id}>
			<td>{song.title}</td>
			<td>{song.artist}</td>
			<td>{song.album}</td>
			<td>{song.releaseDate}</td>
			<td>{song.genre}</td>
		</tr>
	);
};

export default SongRow;
