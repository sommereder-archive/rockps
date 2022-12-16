import React from 'react';
import { Header } from './components/HeaderFooter/Header';
import { Footer } from './components/HeaderFooter/Footer';
import { AppProvider } from './contexts/AppContext';
import { GameStage } from './components/GameStages/GameStage';

export default function App() {
  return (
    <AppProvider>
      <Header />
      <GameStage />
      <Footer />
    </AppProvider>
  );
}
