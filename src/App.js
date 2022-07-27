import CookieConsent from "react-cookie-consent";
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import MainPage from "./mainpage/MainPage";
import ButtonList from "./menu/ButtonList";
import SiteDesign from "./sitedesign/SiteDesign";
import MyStory from "./mystory/MyStory";
import ContactMe from "./contact/ContactMe";
import GameList from "./game/GameList";
import GameFrame from "./game/GameFrame";
import WebCamOfTheDay from "./webcam/WebCamOfTheDay";
import Platform from "./series/Platform";
import FilterSeries from "./series/FilterSeries";
import EnterLink from "./tv/EnterLink";
import WatchTv from "./tv/WatchTv";
import Weather from "./weather/Weather";
import Intro from "./trivial/Intro";
import DashBoard from "./dashboard/DashBoard";
import Recipes from "./recipes/Recipes";
import Ktools from "./kitchentools/Ktools";
import SingleRecipe from "./recipes/SingleRecipe";
import AlwaysOn from "./alwayson/AlwaysOn";
import Farts from "./fart/Farts";
import ScoreCounter from "./scorecounter/ScoreCounter";
import WorkInProgress from "./inprogress/WorkInProgress";
// const WatchTv = React.lazy( () => import("./tv/WatchTv"));
// const Intro = React.lazy(() => import("./trivial/Intro"));
// const ContactMe = React.lazy(() => import("./contact/ContactMe"));
// const MainPage = React.lazy(() => import("./mainpage/MainPage"));
// const ButtonList = React.lazy(() => import("./menu/ButtonList"));
// const SiteDesign = React.lazy(() => import("./sitedesign/SiteDesign"));
// const MyStory = React.lazy(() => import("./mystory/MyStory"));
// const GameList = React.lazy(() => import("./game/GameList"));
// const GameFrame = React.lazy(() => import("./game/GameFrame"));
// const WebCamOfTheDay = React.lazy(() => import("./webcam/WebCamOfTheDay"));
// const WorkInProgress = React.lazy(() => import("./inprogress/WorkInProgress"));
// const EnterLink = React.lazy(() => import("./tv/EnterLink"));
// const Platform = React.lazy(() => import("./series/Platform"));
// const FilterSeries = React.lazy(() => import("./series/FilterSeries"));
// const Weather = React.lazy(() => import("./weather/Weather"));
// const Recipes = React.lazy(() => import("./recipes/Recipes"));
// const Ktools = React.lazy(() => import("./kitchentools/Ktools"));
// const SingleRecipe = React.lazy(() => import("./recipes/SingleRecipe"));
// const Farts = React.lazy(() => import("./fart/Farts"));
// const NotFound = React.lazy( () => import('./notfound/NotFound'));
// const AlwaysOn = React.lazy( () => import('./alwayson/AlwaysOn'));
// const ScoreCounter = React.lazy( () => import('./scorecounter/ScoreCounter'));
// const DashBoard = React.lazy( () => import('./dashboard/DashBoard'));



class App extends React.Component{

  render() {
    return(
        <div className="App App-main-container">
          <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
          {/*<React.Suspense fallback={<Loading/>}>*/}
            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<MainPage/>}/>
                <Route path='/menu' element={<ButtonList/>}/>
                <Route path='/design' element={<SiteDesign/>}/>
                <Route path='/mystory' element={<MyStory/>}/>
                <Route path='/contact' element={<ContactMe/>}/>
                <Route path='/emulist' element={<GameList/>}/>
                <Route path='/play/:tag' element={<GameFrame/>}/>
                <Route path='/webcams/:tag' element={<WebCamOfTheDay/>}/>
                <Route path='/filmseries/selectplatform' element={<Platform/>}/>
                <Route path='/filmseries/filter/:tag' element={<FilterSeries/>}/>
                <Route path='/enterTvLink' element={<EnterLink/>}/>
                <Route path='/watchTv' element={<WatchTv/>}/>
                <Route path='/weather' element={<Weather/>}/>
                <Route path='/trivial' element={<Intro/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
                <Route path='/recipes' element={<Recipes/>}/>
                <Route path='/kitchenTools' element={<Ktools/>}/>
                <Route path='/recipe/:tag' element={<SingleRecipe/>}/>
                <Route path='/fartIsFun' element={<Farts/>}/>
                <Route path='/alwaysOn' element={<AlwaysOn/>}/>
                <Route path='/ps1' element={<AlwaysOn/>}/>
                <Route path='/scoreCounter' element={<ScoreCounter/>}/>
                <Route path='/boo' element={<WorkInProgress/>}/>
                <Route path="*" element={<MainPage/>}/>
              </Routes>
            </BrowserRouter>
          {/*</React.Suspense>*/}
        </div>
    )
  }

}

export default App;
