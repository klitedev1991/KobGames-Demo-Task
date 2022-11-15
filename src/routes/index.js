import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../containers/HomePage';
import LeaderboardPage from '../containers/LeaderboardPage';

const Router = () => {
  const [isLessMode, setIsLessMode] = useState(false);
  const [btnDataOfCard, setBtnDataOfCard] = useState();
  const handleClickInModal = (image, btnText, isEnable) => {
    setBtnDataOfCard({ image, btnText, isEnable });
  };

  return (
    <>
      <BrowserRouter>
        <Header
          isLessMode={isLessMode}
          setIsLessMode={setIsLessMode}
          handleClickInModal={handleClickInModal}
          btnDataOfCard={btnDataOfCard}
        />
        <Routes>
          <Route
            element={
              <HomePage
                isLessMode={isLessMode}
                setIsLessMode={setIsLessMode}
                handleClickInModal={handleClickInModal}
                btnDataOfCard={btnDataOfCard}
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
