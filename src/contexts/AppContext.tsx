import React, { createContext, useState } from 'react';
import { GameProvider } from './GameContext';
import { PlayerProvider } from './PlayerContext';
import { ComputerProvider } from './ComputerProvider';
import { Stage } from '../constants/Stage';

export interface AppContextValue {
  activeStage: Stage;
  setActiveStage: (stage: Stage) => void;
}

export const AppContext = createContext<AppContextValue>(undefined!);

export interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const [activeStage, setActiveStage] = useState<Stage>(Stage.Setup);

  const contextValue = {
    activeStage,
    setActiveStage,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <PlayerProvider>
        <ComputerProvider>
          <GameProvider>{children}</GameProvider>
        </ComputerProvider>
      </PlayerProvider>
    </AppContext.Provider>
  );
};
