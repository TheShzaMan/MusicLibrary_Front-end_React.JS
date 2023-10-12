import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import NewSongForm from "./components/NewSongForm/NewSongForm";
import MusicTable from "./components/MusicTable/MusicTable";

function App() {
	const [songLibrary, setSongLibrary] = useState([]);

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

	useEffect(() => {
		fetchSongLibrary();
	}, []);

	return (
		<div className='App'>
			{/* <MusicTable key= /> */}
			<NewSongForm onNewSong={fetchSongLibrary} />
		</div>
	);
}

export default App;
