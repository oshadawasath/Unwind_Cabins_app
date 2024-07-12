import React from 'react';
import Experience from './Experience';
import FindAvailableCabins from './FindAvailableCabins';
import VideoPage from './VideoPage';
import InspirationPage from './InspirationPage';
import HomePage from './HomePage';
import DiscoverCabinsPage from './DiscoverCabinsPage';
import QuestionPage from './QuestionPage';
import AboutPage from './AboutPage';
import DetailsPage from './DetailsPage';
// import SignInPage from './SignInPage';

export default function Container() {
  return (

    <>
        <HomePage/>
      <DiscoverCabinsPage/>
      <InspirationPage/>

      <Experience/>
      <VideoPage/>

      <FindAvailableCabins/>
      <QuestionPage/>
      <AboutPage/>
      <DetailsPage/>
    </>
  )
}
