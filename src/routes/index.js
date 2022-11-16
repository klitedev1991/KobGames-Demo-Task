import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../containers/HomePage';
import LeaderboardPage from '../containers/LeaderboardPage';

const Router = () => {
  const [isLessMode, setIsLessMode] = useState(false);
  const [btnDataOfCard, setBtnDataOfCard] = useState({
    image: '',
    status: 'select-wallet',
  });
  const handleClickInModal = (image, btnText, isEnable) => {
    setBtnDataOfCard({ ...btnDataOfCard, image: image, status: 'open' });
  };

  const setDisconnect = () => {
    setBtnDataOfCard({ ...btnDataOfCard, image: '', status: 'select-wallet' });
  };

  const setStatusToOpen = (image) => {
    setBtnDataOfCard({ ...btnDataOfCard, image: image, status: 'open' });
  };

  return (
    <>
      <BrowserRouter>
        <Header
          isLessMode={isLessMode}
          setIsLessMode={setIsLessMode}
          btnDataOfCard={btnDataOfCard}
          handleClickInModal={handleClickInModal}
          setDisconnect={setDisconnect}
        />
        <Routes>
          <Route
            element={
              <HomePage
                isLessMode={isLessMode}
                setIsLessMode={setIsLessMode}
                btnDataOfCard={btnDataOfCard}
                handleClickInModal={handleClickInModal}
                setStatusToOpen={setStatusToOpen}
              />
            }
            path="/"
          />
          <Route element={<LeaderboardPage />} path="/leaderboard" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
