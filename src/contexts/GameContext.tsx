import React, { createContext, useContext, useEffect, useState } from 'react';
import { ComputerContext } from './ComputerProvider';
import { Stage } from '../constants/Stage';
import { AppContext } from './AppContext';
import { RuleSet } from '../constants/RuleSet';
import { Winner } from '../constants/Winner';
import { PlayerContext } from './PlayerContext';
import { Gesture } from '../constants/Gesture';

export interface GameContextValue {
  gamesToWin: number;
  setGamesToWin: (gamesToWin: number) => void;

  gameResult?: string;

  numPlayerWon: number;
  numComputerWon: number;

  winner?: Winner;

  playGame: (playerGesture: Gesture, computerGesture: Gesture) => void;
  resetGame: () => void;
}

export const GameContext = createContext<GameContextValue>(undefined!);

export interface GameProviderProps {
  children: React.ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps): JSX.Element => {
  const { setActiveStage } = useContext(AppContext);
  const { setPlayerGesture } = useContext(PlayerContext);
  const { setComputerGesture } = useContext(ComputerContext);

  const [gamesToWin, setGamesToWin] = useState(2);
  const [gameResult, setGameResult] = useState<string>();

  const [numPlayerWon, setNumPlayerWon] = useState(0);
  const [numComputerWon, setNumComputerWon] = useState(0);

  const [winner, setWinner] = useState<Winner>();

  useEffect(() => {
    if (numComputerWon === gamesToWin) {
      setWinner(Winner.Computer);
    }
  }, [gamesToWin, numComputerWon]);

  useEffect(() => {
    if (numPlayerWon === gamesToWin) {
      setWinner(Winner.Player);
    }
  }, [gamesToWin, numPlayerWon]);

  const playGame = (playerGesture: Gesture, computerGesture: Gesture) => {
    if (computerGesture === playerGesture) {
      setGameResult('Draw.');
    } else {
      if (RuleSet[computerGesture] === playerGesture) {
        setGameResult('Computer won.');
        setNumComputerWon((prev) => ++prev);
      } else {
        setGameResult('Player won');
        setNumPlayerWon((prev) => ++prev);
      }
    }
    setPlayerGesture(playerGesture);
    setComputerGesture(computerGesture);
  };

  const resetGame = () => {
    setPlayerGesture(undefined);
    setComputerGesture(undefined);

    setNumPlayerWon(0);
    setNumComputerWon(0);

    setWinner(undefined);

    setActiveStage(Stage.Setup);
  };

  const contextValue = {
    gamesToWin,
    setGamesToWin,

    gameResult,

    numPlayerWon,
    numComputerWon,

    winner,

    playGame,
    resetGame,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
