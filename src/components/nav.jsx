import React, { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { searchGames, clearSearched } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn, logoAnim } from "../animations";

const NavBar = () => {
	const [searchText, setSearchText] = useState("");
	const [pageSizeSearch, setPageSizeSearch] = useState(20);
	const dispatch = useDispatch();

	const inputHandler = (e) => {
		setSearchText(e.target.value);
	};

	const submitSearch = (e) => {
		e.preventDefault();
		dispatch(searchGames(searchText, pageSizeSearch));
		// setSearchText("");
	};

	const clearSearched = (e) => {
		setSearchText("");
		dispatch({ type: "CLEAR_SEARCHED" });
	};

	const handleChangeNumPages = (e) => {
		e.preventDefault();
		dispatch(searchGames(searchText, pageSizeSearch));
	};

	return (
		<StyledNav>
			<div className="logo" onClick={clearSearched}>
				{/* <img src={logo} /> */}
				<svg
					width="40"
					height="50"
					xmlns="http://www.w3.org/2000/svg"
					fillRule="evenodd"
					clipRule="evenodd"
				>
					<motion.path
						d="M8.625 0c.61 7.189-5.625 9.664-5.625 15.996 0 4.301 3.069 
          7.972 9 8.004 5.931.032 9-4.414 9-8.956 0-4.141-2.062-8.046-5.952-10.474.924 
          2.607-.306 4.988-1.501 5.808.07-3.337-1.125-8.289-4.922-10.378zm4.711 13c3.755 
          3.989 1.449 9-1.567 9-1.835 0-2.779-1.265-2.769-2.577.019-2.433 2.737-2.435 
          4.336-6.423z"
						variants={logoAnim}
						initial="hidden"
						animate="visible"
					/>
				</svg>
				<h1>Ignite</h1>
			</div>
			<motion.form
				className="search"
				onSubmit={submitSearch}
				variants={fadeIn}
				initial="hidden"
				animate="show"
			>
				<input type="text" value={searchText} onChange={inputHandler} />
				<button type="submit">Search</button>

				<div className="pages-number">
					<input
						className="page-size"
						type="number"
						maxLength="2"
						value={pageSizeSearch}
						onChange={(e) => {
							setPageSizeSearch(e.target.value);
						}}
					></input>
					<button className="results">Results</button>
				</div>
			</motion.form>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	text-align: center;
	.logo {
		display: flex;
		justify-content: center;
		padding: 1rem;
		cursor: pointer;

		h1 {
			color: #ff7676;
			padding-top: 1rem;
		}

		svg {
			stroke: #ff7676;
			stroke-width: 2;
		}
	}

	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		outline: none;
		margin-top: 1rem;
		/* box-shadow: 0px 0px 20px #ff76762f; */
		box-shadow: 0px 0px 20px #ff7676ae;
		border-radius: 3rem 0rem 0rem 3rem;
		background-color: white;
		z-index: 2;
	}

	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
		border-radius: 0rem 3rem 3rem 0rem;

		/* :hover {
      background: white;
      box-shadow: 0px 0px 20px #ff7676ae;
      color: #ff7676;
    } */
	}

	.page-size {
		width: 5rem;
		font-size: 1.2rem;
		padding: 0.5rem 0rem 0.5rem 1.2rem;
		border: none;
		outline: none;
		margin-top: 1rem;
		/* box-shadow: 0px 0px 20px #ff76762f; */
		box-shadow: 0px 0px 20px #ff7676ae;
		border-radius: 3rem 0rem 0rem 3rem;
		background-color: white;
		z-index: 2;
	}

	.results {
		height: min-content;
		font-size: 1.2rem;
		border: none;
		padding: 0.5rem 2rem;
		color: #696969;
		background-color: white;
		border-radius: 0rem 3rem 3rem 0rem;
		cursor: default;
		width: min-content;
	}
`;

export default NavBar;
