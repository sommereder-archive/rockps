import { Gesture } from '../../constants/Gesture';
import GestureRock from '../../icons/gesture-rock.svg';
import GesturePaper from '../../icons/gesture-paper.svg';
import GestureScissors from '../../icons/gesture-scissors.svg';
import QuestionMark from '../../icons/question-mark.svg';
import React, { useEffect, useState } from 'react';

const getIconPath = (gesture?: Gesture) => {
  switch (gesture) {
    case Gesture.Rock:
      return GestureRock;
    case Gesture.Paper:
      return GesturePaper;
    case Gesture.Scissors:
      return GestureScissors;
    default:
      return QuestionMark;
  }
};

export interface GestureIconProps {
  gesture?: Gesture;
}
export const GestureIcon = ({ gesture }: GestureIconProps): JSX.Element => {
  const [iconPath, setIconPath] = useState<string>();

  useEffect(() => {
    setIconPath(getIconPath(gesture));
  }, [gesture]);

  return <img className="w-[64px] h-[64px]" src={iconPath} alt="Gesture" />;
};
