import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./../actions/gamesAction";
import Game from "../components/game";
import GameDetail from "../components/gameDetail";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "../animations";

const Home = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const pathId = pathname.split("/")[2];
	const [pageSizePopular, setPageSizePopular] = useState(9);
	const [pageSizeUpcoming, setPageSizeUpcoming] = useState(9);
	const [pageSizeNewGames, setPageSizeNewGames] = useState(9);

	const dispatch = useDispatch();
	//console.log(pathId);

	const details = useSelector((state) => state.details);

	useEffect(() => {
		if (pathId && !details) {
			navigate("/");
		} else {
			document.body.style.overflow = "auto";
		}

		dispatch(loadGames(pageSizePopular, pageSizeUpcoming, pageSizeNewGames));
	}, []);

	const handleChangeNumPages = (e) => {
		e.preventDefault();
		dispatch(loadGames(pageSizePopular, pageSizeUpcoming, pageSizeNewGames));
	};

	const { popular, newGames, upcoming, searched } = useSelector(
		(state) => state.games
	);

	return (
		<GameList variants={fadeIn} initial="hidden" animate="show" exit="exit">
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence>
					{pathId && <GameDetail pathId={pathId} />}
				</AnimatePresence>
				{searched.length > 0 && (
					<>
						<h2>Results </h2>
						<div className="games">
							{searched &&
								searched.map((g) => (
									<Game
										key={g.id}
										name={g.name}
										released={g.released}
										id={g.id}
										image={g.background_image}
										color={g.dominant_color}
										metacritic={g.metacritic}
									/>
								))}
						</div>
					</>
				)}

				<div className="title">
					<h2>Upcoming Games</h2>

					<form onSubmit={handleChangeNumPages}>
						<input
							className="page-size"
							type="number"
							maxLength="2"
							value={pageSizeUpcoming}
							onChange={(e) => {
								setPageSizeUpcoming(e.target.value);
							}}
						></input>
						<button className="results" type="submit">
							Results
						</button>
					</form>
				</div>
				<div className="games">
					{upcoming &&
						upcoming.map((g) => (
							<Game
								key={g.id}
								name={g.name}
								released={g.released}
								id={g.id}
								image={g.background_image}
								color={g.dominant_color}
								metacritic={g.metacritic}
							/>
						))}
				</div>

				<div className="title">
					<h2>Popular Games</h2>

					<form onSubmit={handleChangeNumPages}>
						<input
							className="page-size"
							type="number"
							maxLength="2"
							value={pageSizePopular}
							onChange={(e) => {
								setPageSizePopular(e.target.value);
							}}
						></input>
						<button className="results" type="submit">
							Results
						</button>
					</form>
				</div>
				<div className="games">
					{popular &&
						popular.map((g) => (
							<Game
								key={g.id}
								name={g.name}
								released={g.released}
								id={g.id}
								image={g.background_image}
								color={g.dominant_color}
								metacritic={g.metacritic}
							/>
						))}
				</div>

				<div className="title">
					<h2>New Games</h2>
					<form onSubmit={handleChangeNumPages}>
						<input
							className="page-size"
							type="number"
							maxLength="2"
							value={pageSizeNewGames}
							onChange={(e) => {
								setPageSizeNewGames(e.target.value);
							}}
						></input>
						<button className="results" type="submit">
							Results
						</button>
					</form>
				</div>

				<div className="games">
					{newGames &&
						newGames.map((g) => (
							<Game
								key={g.id}
								name={g.name}
								released={g.released}
								id={g.id}
								image={g.background_image}
								color={g.dominant_color}
								metacritic={g.metacritic}
							/>
						))}
				</div>
			</AnimateSharedLayout>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 5rem 5rem 0rem;
	}
	.games {
		min-height: 80vh;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		grid-column-gap: 3rem;
		grid-row-gap: 5rem;
	}

	.title {
		display: flex;
		align-items: center;
	}

	.page-size {
		width: 5rem;
		font-size: 1.2rem;
		padding: 0.5rem 0rem 0.5rem 1.2rem;
		border: none;
		outline: none;
		margin-top: 1rem;
		/* box-shadow: 0px 0px 20px #ff76762f; */
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
		border-radius: 3rem 0rem 0rem 3rem;
		background-color: white;
		z-index: 2;
		/* color: #ff7676; */
		color: #696969;

		/* 	&::-webkit-inner-spin-button {
			-webkit-appearance: none;
		}
		&::-webkit-outer-spin-button {
			-webkit-appearance: none;
		} */
	}

	.results {
		font-size: 1.2rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #696969;
		color: white;

		border-radius: 0rem 3rem 3rem 0rem;

		:hover {
			box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
		}
	}
`;

export default Home;
