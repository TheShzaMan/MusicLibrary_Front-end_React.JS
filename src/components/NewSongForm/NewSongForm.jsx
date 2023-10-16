import InputField from "../InputField/InputField";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewSongForm.css";

const NewSongForm = ({ onNewSong }) => {
	const [title, setTitle] = useState("");
	const [artist, setArtist] = useState("");
	const [album, setAlbum] = useState("");
	const [releaseDate, setReleaseDate] = useState("");
	const [genre, setGenre] = useState("");

	function ResetSongForm() {
		setTitle("");
		setArtist("");
		setAlbum("");
		setReleaseDate("");
		setGenre("");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const dataSongBody = {
			title,
			artist,
			album,
			releaseDate,
			genre,
		};
		try {
			const response = await axios.post(
				"https://localhost:7274/api/songs",
				dataSongBody
			);
			if (response.status === 201) {
				onNewSong();
				ResetSongForm();
			}
		} catch (error) {
			console.warn("Error submitting NewSongForm:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='form-container'>
			<p className='add-title'>Add Song to Library</p>

			<InputField label='Song Title' value={title} onChange={setTitle} />
			<InputField label='Artist' value={artist} onChange={setArtist} />
			<InputField label='Album' value={album} onChange={setAlbum} />
			<InputField
				label='Year'
				value={releaseDate}
				onChange={setReleaseDate}
			/>
			<InputField label='Genre' value={genre} onChange={setGenre} />
			<div className='submit'>
				<button className='submit w3-button w3-round-xlarge w3-hover-pink'>
					ADD SONG
				</button>
			</div>
		</form>
	);
};

export default NewSongForm;
