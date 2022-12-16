import { Gesture } from '../../constants/Gesture';
import { GestureIcon } from './GestureIcon';

export interface ComputerGestureProps {
  gesture?: Gesture;
}
export const ComputerGesture = ({
  gesture,
}: ComputerGestureProps): JSX.Element => {
  return (
    <div className="p-8 rounded-full">
      <GestureIcon gesture={gesture} />
    </div>
  );
};
