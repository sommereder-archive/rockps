import { Gesture } from '../../constants/Gesture';
import React, { useContext } from 'react';
import { GestureIcon } from './GestureIcon';
import { GameContext } from '../../contexts/GameContext';

export interface GestureButtonProps {
  gesture: Gesture;
  onClick: (gesture: Gesture) => void;
}

export const GestureButton = ({
  gesture,
  onClick,
}: GestureButtonProps): JSX.Element => {
  const { winner } = useContext(GameContext);

  return (
    <button
      className="p-8 rounded-full enabled:hover:bg-yellow-400"
      onClick={() => onClick(gesture)}
      disabled={!!winner}
    >
      <GestureIcon gesture={gesture} />
    </button>
  );
};
