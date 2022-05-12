const initState = {
  game: {},
  screenShots: {},
  isLoading: true,
};

//Reducer
const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAME":
      return {
        ...state,
        game: action.payload.game,
        screenShots: action.payload.screenShots,
        isLoading: false,
      };
    case "LOADING_GAME":
      return {
        ...state,
        isLoading: true,
      };

    case "RESET_GAME":
      return {
        ...state,
        game: action.payload.game,
        screenShots: action.payload.screenShots,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default gameReducer;
