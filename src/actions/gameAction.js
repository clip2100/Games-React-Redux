import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadGame = (game_id) => async (dispatch) => {
  dispatch({
    type: "LOADING_GAME",
  });

  const gameData = await axios.get(gameDetailsURL(game_id));
  const gameScreenshots = await axios.get(gameScreenshotsURL(game_id));

  dispatch({
    type: "FETCH_GAME",
    payload: {
      game: gameData.data,
      screenShots: gameScreenshots.data,
    },
  });
};

export const resetGame = () => (dispatch) => {
  dispatch({
    type: "RESET_GAME",
    payload: {
      game: {},
      screenShots: {},
    },
  });
};
