import { Gesture } from './Gesture';

export const RuleSet = {
  [Gesture.Paper]: Gesture.Rock,
  [Gesture.Rock]: Gesture.Scissors,
  [Gesture.Scissors]: Gesture.Paper,
};
