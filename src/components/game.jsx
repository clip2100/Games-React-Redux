import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loadGame } from "./../actions/gameAction";
import { Link } from "react-router-dom";
import { smallImage } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { popup } from "../animations";

const Game = ({ name, released, id, image }) => {
  const dispatch = useDispatch();
  const stringPathId = id.toString();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { game, screenShots, isLoading } = useSelector((state) => state.detail);

  const handleClick = (game_id) => {
    document.body.style.overflow = "hidden";
    if (!(!isLoading && game && game.id === game_id))
      dispatch(loadGame(game_id));
  };

  const handleNavigate = () => {
    // console.log(pathname);
    if (pathname === "/") navigate(`game/${id}`);
  };

  return (
    <StyledGame
      layoutId={stringPathId}
      onClick={() => handleClick(id)}
      variants={popup}
    >
      <motion.div onClick={handleNavigate}>
        <div className="title">
          <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        </div>
        <div>
          <p>{released}</p>
        </div>

        <motion.img layoutId={"image " + id} src={smallImage(image, 420)} />
      </motion.div>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  .title {
    display: flex;
    justify-content: center;
    h3 {
      width: fit-content;
    }
  }
`;

export default Game;
