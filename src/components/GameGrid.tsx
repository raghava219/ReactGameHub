import { SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding="10px"
          spacing={10}
        >
          {isLoading &&
            skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      </ul>
    </>
  );
};

export default GameGrid;
