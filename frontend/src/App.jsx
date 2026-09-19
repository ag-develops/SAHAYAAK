import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import DashboardScreen from './components/DashboardScreen.jsx';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userName, setUserName] = useState('');
  const [fontScale, setFontScale] = useState(1.0);

  const handleFontScaleChange = (delta) => {
    setFontScale((prev) => Math.min(1.35, Math.max(0.85, Number((prev + delta).toFixed(2)))));
  };

  const handleContinueFromWelcome = (name) => {
    setUserName(name);
    setCurrentScreen('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-[#f2fbf9] font-['Plus_Jakarta_Sans',sans-serif] text-[#141d1c] antialiased"
      style={{ fontSize: `${fontScale * 100}%` }}
    >
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        fontSizeScale={fontScale}
        onFontScaleChange={handleFontScaleChange}
      />

      <main className="w-full pt-24 bg-[#f2fbf9] max-w-[1180px] mx-auto px-6 flex-grow">
        {currentScreen === 'welcome' ? (
          <WelcomeScreen
            userName={userName}
            setUserName={setUserName}
            onContinue={handleContinueFromWelcome}
          />
        ) : (
          <DashboardScreen
            userName={userName}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
