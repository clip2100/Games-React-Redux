import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { smallImage } from "../utils";

//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

import { starsAnim, parentAnim } from "../animations";

const GameDetail = ({ pathId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { game, screenShots, isLoading } = useSelector((state) => state.detail);

	const getPlatform = (platform) => {
		switch (true) {
			case platform.includes("PlayStation"):
				return playstation;
			case platform.includes("Xbox"):
				return xbox;
			case platform === "PC":
				return steam;
			case platform.includes("Nintendo"):
				return nintendo;
			case platform === "iOS":
				return apple;
			default:
				return gamepad;
		}
	};

	const getRating = () => {
		let stars = [];
		const rating = Math.floor(game.rating);

		for (let i = 1; i <= 5; i++) {
			stars.push(
				<motion.img
					variants={starsAnim}
					className="star-rating"
					src={i <= rating ? starFull : starEmpty}
					key={i}
				/>
			);
		}
		// console.log(stars);
		return stars;
	};

	const exitDetailHandler = (e) => {
		const element = e.target;
		if (element.classList.contains("shadow")) {
			document.body.style.overflow = "auto";
			navigate("/");
		}
	};

	if (isLoading) return <></>;

	return (
		<CardShadow className="shadow" onClick={exitDetailHandler}>
			<motion.div layoutId={pathId} className="detail">
				<motion.div className="stats">
					<motion.div className="rating">
						<motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
						<p>Rating: {game.rating}</p>
						<motion.div variants={parentAnim} initial="hidden" animate="show">
							{getRating()}
						</motion.div>
					</motion.div>
					<motion.div className="info">
						<h3>Platforms</h3>
						<motion.div className="platforms">
							{game.platforms &&
								game.platforms.map((p) => (
									<motion.div key={p.platform.id}>
										<div className="img-container">
											<h4>{p.platform.name}</h4>
											<img src={getPlatform(p.platform.name)} />
										</div>
									</motion.div>
								))}
						</motion.div>
					</motion.div>
				</motion.div>
				<motion.div className="media">
					<motion.img
						layoutId={`image ${pathId}`}
						src={smallImage(game.background_image, 1280)}
					/>
				</motion.div>
				<motion.div className="description">
					<p>{game.description_raw} </p>
				</motion.div>
				<div className="gallery">
					{screenShots.results &&
						screenShots.results.map((sc) => (
							<img src={smallImage(sc.image, 1280)} key={sc.id} />
						))}
				</div>
			</motion.div>
		</CardShadow>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;

	&::-webkit-scrollbar {
		width: 0.75rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}

	.detail {
		width: 80%;
		border-radius: 1rem;
		padding: 2rem 5rem;
		background: white;
		position: absolute;
		left: 10%;
		color: black;

		.stats {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.star-rating {
				display: inline;
			}
		}

		.info {
			text-align: center;
		}

		.platforms {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex-wrap: wrap;

			.img-container {
				padding: 1rem 1rem;
				align-items: center;

				height: 6rem;
				display: flex;
				flex-direction: column;
				img {
					padding-top: 1rem;
					width: 30px;
				}
			}
		}
		.gallery {
			img {
				width: 100%;
			}
		}

		.media {
			margin-top: 5rem;
			img {
				width: 100%;
			}
		}
		.description {
			margin: 5rem 0rem;
		}
	}
`;
export default GameDetail;
