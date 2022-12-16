import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { Style } from '../../constants/Style';
import { Stage } from '../../constants/Stage';
import { PlayerContext } from '../../contexts/PlayerContext';
import { AppContext } from '../../contexts/AppContext';

export const GameSetupStage = () => {
  const { setActiveStage } = useContext(AppContext);
  const { playerName, setPlayerName } = useContext(PlayerContext);
  const { gamesToWin, setGamesToWin } = useContext(GameContext);

  return (
    <section>
      <h1 className={Style.h1}>Ready Player One</h1>
      <form className="grid grid-cols-2 gap-y-8 items-center mx-auto max-w-[360px]">
        <label className={Style.label}>Player name</label>
        <input
          className={Style.input}
          type="text"
          value={playerName}
          onChange={(event) => setPlayerName(event.target.value)}
        />
        <label className={Style.label}>Wins to win round</label>
        <input
          className={Style.input}
          type="number"
          min="0"
          value={gamesToWin}
          onChange={(event) => {
            const value = +event.target.value;
            setGamesToWin(value > 0 ? value : 1);
          }}
        />
        <button
          className={`col-span-2 ${Style.button}`}
          onClick={() => setActiveStage(Stage.Arena)}
        >
          Start
        </button>
      </form>
    </section>
  );
};
