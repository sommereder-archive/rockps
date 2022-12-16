import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { Style } from '../../constants/Style';
import { PlayerContext } from '../../contexts/PlayerContext';
import { GESTURES } from '../../constants/Gesture';
import { GestureButton } from '../UiElements/GestureButton';
import { ComputerGesture } from '../UiElements/ComputerGesture';
import { ComputerContext } from '../../contexts/ComputerProvider';

export const GameArenaStage = (): JSX.Element => {
  const { playerName } = useContext(PlayerContext);
  const { computerGesture, getComputerGesture } = useContext(ComputerContext);
  const {
    gamesToWin,
    gameResult,
    playGame,
    resetGame,
    numPlayerWon,
    numComputerWon,
    winner,
  } = useContext(GameContext);

  return (
    <section>
      <h1 className={Style.h1}>Best of {gamesToWin * 2 - 1}</h1>
      <div className="mx-auto max-w-[480px]">
        <div className="p-4 border-2">
          <h2 className={`${Style.h2} mb-0`}>Computer</h2>
          <div className="flex justify-center">
            <ComputerGesture gesture={computerGesture} />
          </div>
        </div>
        <div className="py-8 text-center">
          <span className="text-5xl font-bold ">
            {numComputerWon}:{numPlayerWon}
          </span>
          <br />
          <span>{gameResult}</span>
        </div>
        <div className="p-4 border-2">
          <div className="flex justify-around">
            {GESTURES.map((gesture, index) => (
              <GestureButton
                gesture={gesture}
                onClick={(gesture) => playGame(gesture, getComputerGesture())}
                key={index}
              />
            ))}
          </div>
          <h2 className={`${Style.h2} mb-0`}>{playerName}</h2>
        </div>
        {winner && (
          <div className="my-8 text-center">
            <span className="mr-4">{winner} won.</span>
            <button className={Style.button} onClick={() => resetGame()}>
              Play again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
