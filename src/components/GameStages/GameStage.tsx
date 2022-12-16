import { Stage } from '../../constants/Stage';
import { GameSetupStage } from './GameSetupStage';
import { GameArenaStage } from './GameArenaStage';
import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

export const GameStage = (): JSX.Element => {
  const { activeStage } = useContext(AppContext);

  return (
    <main className="container px-4 py-16">
      {activeStage === Stage.Setup && <GameSetupStage />}
      {activeStage === Stage.Arena && <GameArenaStage />}
    </main>
  );
};
