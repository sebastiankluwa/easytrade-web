import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Redirect, Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings, BotsSummary, BotsDetails, BotDashboard, BotTrades, BotSettings } from './components';

import {
  CryptocurrenciesPrices,
  StockChart,
  Investment,
  CryptocurrenciesNews,
  BotsManagement,
  BotsConfiguration,
  SupportContact,
  SupportFaq
} from './pages';

import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 md:w-[calc(100%-18rem)]  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Navigate to="/bots/management" />} /> 

                {/* bots  */}
                <Route path="/bots/management" element={<BotsManagement />} >
                  <Route index element={<BotsSummary />} />
                  <Route path=":botId" element={<BotsDetails />}>
                    <Route index element={<BotDashboard />} />
                    <Route path='dashboard' element={<BotDashboard />} />
                    <Route path='positions' element={<BotTrades />} />
                    <Route path='settings' element={<BotSettings />} />
                  </Route>
                </Route>
                <Route path="/bots/configuration" element={<BotsConfiguration />} />

                {/* markets  */}
                <Route path="/markets/prices" element={<CryptocurrenciesPrices />} />
                <Route path="/markets/news" element={<CryptocurrenciesNews />} />
                <Route path="/markets/chart" element={<StockChart />} />

                {/* support  */}
                <Route path="/support/faq" element={<SupportFaq />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;