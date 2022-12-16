import React, { createContext, useState } from 'react';
import { Gesture } from '../constants/Gesture';

export interface PlayerContextValue {
  playerName: string;
  setPlayerName: (username: string) => void;
  playerGesture?: Gesture;
  setPlayerGesture: (gesture?: Gesture) => void;
}

export const PlayerContext = createContext<PlayerContextValue>(undefined!);

export interface PlayerProviderProps {
  children: React.ReactNode;
}

export const PlayerProvider = ({
  children,
}: PlayerProviderProps): JSX.Element => {
  const [playerName, setPlayerName] = useState('Parzival');
  const [playerGesture, setPlayerGesture] = useState<Gesture>();

  const contextValue = {
    playerName,
    setPlayerName,
    playerGesture,
    setPlayerGesture,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
