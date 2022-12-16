import React, { createContext, useState } from 'react';
import { Gesture, GESTURES } from '../constants/Gesture';
import { randomInt } from '../utils';

export interface ComputerContextValue {
  getComputerGesture: () => Gesture;
  computerGesture?: Gesture;
  setComputerGesture: (gesture?: Gesture) => void;
}

export const ComputerContext = createContext<ComputerContextValue>(undefined!);

export interface ComputerProviderProps {
  children: React.ReactNode;
}

export const ComputerProvider = ({
  children,
}: ComputerProviderProps): JSX.Element => {
  const [computerGesture, setComputerGesture] = useState<Gesture>();

  const getComputerGesture = () => {
    return GESTURES[randomInt(GESTURES.length)];
  };

  const contextValue = {
    computerGesture,
    setComputerGesture,
    getComputerGesture,
  };

  return (
    <ComputerContext.Provider value={contextValue}>
      {children}
    </ComputerContext.Provider>
  );
};
