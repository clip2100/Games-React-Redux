import axios from "axios";
import {
	popularGamesURL,
	newGamesURL,
	upcomingGamesURL,
	searchGameURL,
} from "../api";

export const loadGames =
	(pageSizePopular, pageSizeUpcoming, pageSizeNewGames) => async (dispatch) => {
		const popularData = await axios.get(popularGamesURL(pageSizePopular));
		const upcomingData = await axios.get(upcomingGamesURL(pageSizeUpcoming));
		const newData = await axios.get(newGamesURL(pageSizeNewGames));

		dispatch({
			type: "FETCH_GAMES",
			payload: {
				popular: popularData.data.results,
				newGames: newData.data.results,
				upcoming: upcomingData.data.results,
			},
		});
	};

export const searchGames = (game_name, pageSize) => async (dispatch) => {
	const searchGames = await axios.get(searchGameURL(game_name, pageSize));

	if (game_name.trim() != "") {
		dispatch({
			type: "FETCH_SEARCHED",
			payload: {
				searched: searchGames.data.results,
			},
		});
	} else {
		dispatch({
			type: "FETCH_SEARCHED",
			payload: {
				searched: [],
			},
		});
	}
};
