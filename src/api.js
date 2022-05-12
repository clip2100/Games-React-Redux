const apiKey = `key=${process.env.REACT_APP_API_KEY}`;

const baseUrl = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	return ("0" + month).slice(-2);
};
const getCurrentDay = () => {
	const day = new Date().getDate();
	return ("0" + day).slice(-2);
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating`; //&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added`; //&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released`; //&page_size=10`;

export const popularGamesURL = (pageSize) =>
	`${baseUrl}${popularGames}&page_size=${pageSize}&${apiKey}`;
export const upcomingGamesURL = (pageSize) =>
	`${baseUrl}${upcomingGames}&page_size=${pageSize}&${apiKey}`;
export const newGamesURL = (pageSize) =>
	`${baseUrl}${newGames}&page_size=${pageSize}&${apiKey}`;

export const gameDetailsURL = (game_id) =>
	`${baseUrl}games/${game_id}?&${apiKey}`;

export const gameScreenshotsURL = (game_id) =>
	`${baseUrl}games/${game_id}/screenshots?&${apiKey}`;

export const searchGameURL = (game_name, pageSize) =>
	`${baseUrl}games?search=${game_name}&page_size=${pageSize}&${apiKey}`;
