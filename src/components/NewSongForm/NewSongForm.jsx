import InputField from "../InputField/InputField";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NewSongForm = ({ onNewSong }) => {
	const [title, setTitle] = useState("");
	const [artist, setArtist] = useState("");
	const [album, setAlbum] = useState("");
	const [releaseDate, setReleaseDate] = useState("");
	const [genre, setGenre] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const songBody = {
			title,
			artist,
			album,
			releaseDate,
			genre,
		};
		try {
			const response = await axios.post(
				"https://localhost:7274/api/songs",
				songBody
			);
			if (response.status === 201) {
				onNewSong();
			}
		} catch (error) {
			console.warn("Error submitting NewSongForm:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='form-container'>
			<h4>Add Song to Library</h4>
			<InputField label='Title' value={title} onChange={setTitle} />
			<InputField label='Artist' value={artist} onChange={setArtist} />
			<InputField label='Album' value={album} onChange={setAlbum} />
			<InputField
				label='Release Date'
				value={releaseDate}
				onChange={setReleaseDate}
				type='date'
			/>
			<InputField label='Genre' value={genre} onChange={setGenre} />
			<div>
				<button className='submit'>ADD SONG</button>
			</div>
		</form>
	);
};

export default NewSongForm;
