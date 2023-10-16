import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import NewSongForm from "./components/NewSongForm/NewSongForm";
import MusicTable from "./components/MusicTable/MusicTable";
import SearchBar from "./components/SearchBar/SearchBar";
import Title from "./components/Title/Title";
import Selector from "./components/Selector/Selector";

function App() {
	const [songLibrary, setSongLibrary] = useState([]);
	// const [filteredLibrary, setFilteredLibrary] = useState([]);

	const fetchSongLibrary = async () => {
		try {
			const response = await axios.get(
				"https://localhost:7274/api/songs"
			);

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
		<div className='w3-container body'>
			{/* <div className='header'> */}
			<div className='w3-row w3-container '>
				<div className='w3-col w3-container m4 l4   title-container'>
					<Title />
				</div>
				<div className='w3-col w3-container m2 l2'></div>
				<div className='w3-col w3-container m6 l6   search-container'>
					<SearchBar songLibrary={songLibrary} />
				</div>
			</div>
			<div className='space-under-titlew3-row w3-container  mt-5 '></div>
			<div className='w3-row w3-container s4'>
				<div className='selectors w3-container w3-col m4  '>
					<Selector
						cardTitle='80s'
						songLibrary={songLibrary}
						searchTerm='198'
					/>
				</div>
				<div>
					<Selector
						title='90s'
						songLibrary={songLibrary}
						searchTerm='199'
					/>
					<Selector
						title='ESPAñOL'
						songLibrary={songLibrary}
						searchTerm='nort'
					/>
					<Selector
						title='CLASSIC ROCK'
						songLibrary={songLibrary}
						searchTerm='classi'
					/>
				</div>
				{/* <div className='w3-container w3-col m-1'></div> */}
				<div className='w3-container w3-col m7 '>
					<div className='new-song'>
						<NewSongForm onNewSong={fetchSongLibrary} />
					</div>
				</div>
				<div className='w3-cell-row w3-container'>
					<div className='selectors  w3-col s4  '></div>
					<div className='w3-col w3-cell s4 '></div>
				</div>
				<div className='w3-row w3-container'>
					<div className='selectors w3-container w3-col s4  '></div>
				</div>
			</div>
			<div className='w3-container w3-col s4 '></div>
			<div className='w3-container w3-col s4'></div>

			<div className='w3-row w3-container'>
				<div className='w3-container w3-col s4 bottom-left'></div>
				<div className='w3-container w3-col s4 bottom-right'></div>
			</div>
		</div>
	);
}

export default App;
