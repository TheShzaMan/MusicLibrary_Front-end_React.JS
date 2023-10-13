import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import NewSongForm from "./components/NewSongForm/NewSongForm";
import MusicTable from "./components/MusicTable/MusicTable";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
	const [songLibrary, setSongLibrary] = useState([]);
	// const [filteredLibrary, setFilteredLibrary] = useState([]);
	console.log(songLibrary);
	const fetchSongLibrary = async () => {
		try {
			const response = await axios.get(
				"https://localhost:7274/api/songs"
			);
			console.log(response);
			setSongLibrary(response.data);
		} catch (error) {
			console.warn("Error in fetchSongLibrary request:", error);
		}
	};

	// const filterLibrary = ()

	useEffect(() => {
		fetchSongLibrary();
	}, []);

	return (
		<div className='App'>
			<SearchBar songLibrary={songLibrary} />
			<MusicTable key={songLibrary.id} songLibrary={songLibrary} />
			<NewSongForm onNewSong={fetchSongLibrary} />
		</div>
	);
}

export default App;
